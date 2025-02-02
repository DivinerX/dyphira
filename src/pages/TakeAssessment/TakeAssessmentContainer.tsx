import { TakeAssessment } from "./TakeAssessment";
import { useMediaPermissions } from "@/contexts/media.hook";

import { useEffect, useState } from "react";
import { createAssessment, updateAssessment } from "@/redux/slices/assessment";
import { createAnswer, updateAnswer, addQuestion } from "@/redux/slices/chat";
import { fetchSectionQuestions, fetchSections } from "@/redux/slices/sections";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useAuth } from "@/contexts/auth.hook";
import storage from "@/utils/storage";
import { TUser } from "@/types";

export const TakeAssessmentContainer = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const {
    audioError,
    videoError,
  } = useMediaPermissions();
  const { assessment } = useAppSelector((state) => state.assessment);
  const { sections, questions } = useAppSelector((state) => state.sections);
  const { answer, status } = useAppSelector((state) => state.chat);

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [recordingStartedAt, setRecordingStartedAt] = useState<Date | null>(null);
  const [videoStartTimestamp, setVideoStartTimestamp] = useState(0);

  const isLastSection = activeSectionIndex === sections.length - 1;
  const isLastQuestion = activeQuestionIndex === questions.length - 1;

  useEffect(() => {
    dispatch(fetchSections());
  }, [dispatch]);

  const startAssessment = async () => {
    try {
      const sectionId = sections[activeSectionIndex]?._id;
      if (!sectionId) throw new Error("Invalid section index");

      const assessment = await dispatch(createAssessment()).unwrap();

      const fetchedQuestions = await dispatch(
        fetchSectionQuestions(sectionId),
      ).unwrap();

      if (!fetchedQuestions || fetchedQuestions.length === 0)
        throw new Error("No questions found for the section");

      const questionId = fetchedQuestions[activeQuestionIndex]?._id;
      if (!questionId) throw new Error("Invalid question index");

      await createNewAnswer({
        assessmentId: assessment._id,
        sectionId,
        questionId,
      });
    } catch (error) {
      toast.dismiss();
      toast.error((error as Error).message, {
        theme: "dark",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: true,
      });
    }
  };

  const completeAssessment = () => {
    dispatch(
      updateAssessment({
        assessmentId: assessment!._id,
        completedAt: new Date().toISOString(),
        status: "completed",
      }),
    );
  };

  const createNewAnswer = async ({ assessmentId, sectionId, questionId }: { assessmentId: string, sectionId: string, questionId: string }) => {
    await dispatch(
      createAnswer({
        assessmentId,
        sectionId,
        questionId,
        // @ts-ignore
        videoStartTimestamp: videoStartTimestamp - recordingStartedAt,
      }),
    ).unwrap();
  };

  const handleUpdateAnswer = async (text?: string) => {
    return await dispatch(
      updateAnswer({
        answerId: answer._id!,
        // @ts-ignore
        videoEndTimestamp: Date.now() - recordingStartedAt,
        ...(text && { text }),
      }),
    )
      .unwrap()
  };

  
  const openAccount = (provider: string) => {
    switch (provider) {
      case "twitter":
        window.open(
          `https://twitter.com/i/user/${user?.twitterId}`,
          "_blank",
          "noreferrer",
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/in/${user?.linkedinId}`,
          "_blank",
          "noreferrer",
        );
        break;

      default:
        console.log("Uknown strategy");
    }
  };
  
  const accountLinked = (provider: string) => {
    return !!user?.[`${provider}Id` as keyof TUser];
  };

  const handleLinkAccount = (provider: string) => () => {
    if (accountLinked(provider)) {
      openAccount(provider);
    } else {
      const accessToken = storage.getAccessToken();
      window.location.href = `${import.meta.env.VITE_BASE_API_URL}/social/${provider}?accessToken=${accessToken}`;
    }
  };
  const processQuestionCompletion = async () => {
    try {
      await handleUpdateAnswer();

      if (isLastQuestion && isLastSection) {
        completeAssessment();
      } else if (isLastQuestion) {
        nextSection();
      } else {
        handleNextQuestion();
      }
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message, {
        theme: "dark",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: true,
      });
    }
  };

  const handleNextQuestion = async () => {
    const nextQuestionIndex = activeQuestionIndex + 1;

    dispatch(addQuestion(questions[nextQuestionIndex]));
    setActiveQuestionIndex(nextQuestionIndex);

    await createNewAnswer({
      assessmentId: assessment?._id!,
      sectionId: sections[activeSectionIndex]._id,
      questionId: questions[nextQuestionIndex]._id,
    });
  };

  const nextSection = async () => {
    if (isLastSection) return;
    setActiveSectionIndex((prev) => prev + 1);
    dispatch(fetchSectionQuestions(sections[activeSectionIndex + 1]._id));

    const questionIndex = 0;
    setActiveQuestionIndex(questionIndex);

    await createNewAnswer({
      assessmentId: assessment?._id!,
      sectionId: sections[activeSectionIndex]._id,
      questionId: questions[questionIndex]._id,
    });
  };

  const handleRecordingStart = () => {
    const now = Date.now();
    // @ts-ignore
    setRecordingStartedAt(now);
    setVideoStartTimestamp(now);
  };

  const startAssessmentEnabled =
    sections.length >= 0 && !audioError && !videoError;

  const assessmentCompleted =
    !!assessment && assessment.status !== "in-progress";
  return <TakeAssessment
    user={user}
    assessmentCompleted={assessmentCompleted}
    assessment={assessment}
    startAssessment={startAssessment}
    handleLinkAccount={handleLinkAccount}
    handleRecordingStart={handleRecordingStart}
    processQuestionCompletion={processQuestionCompletion}
  />;
}