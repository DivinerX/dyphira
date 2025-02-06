import { fetchNextAssessmentDate } from "@/redux/slices/assessment";
import { Assessments } from "./Assessments";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchRank } from "@/redux/slices/users";
import { useAuth } from "@/contexts/auth.hook";
import { TTakeAssessmentStatus } from "@/types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AssessmentsContainer = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [nextAssessmentDate, setNextAssessmentDate] = useState<string | null>(
    null,
  );
  const dispatch = useAppDispatch();
  const rank = useAppSelector((state) => state.user.rank);
  const [openAssessment, setOpenAssessment] = useState<"twitter" | "interview" | null>(
    null,
  );
  const [takeAssessmentStatus, setTakeAssessmentStatus] = useState<TTakeAssessmentStatus>({
    twitter: false,
    interview: false,
  });
  const takeAssessment = (option: "twitter" | "interview") => {
    if (option === "twitter") {
      navigate("/assessments/twitter");
    } else {
      if (takeAssessmentStatus.twitter) {
        navigate("/assessments/interview");
      } else {
        toast.info("Please complete the peer rank assessment first");
      }
    }
  }

  useEffect(() => {
    dispatch(fetchRank());
    dispatch(fetchNextAssessmentDate())
      .unwrap()
      .then((data) => {
        setNextAssessmentDate(data.nextAssessmentDate);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (user) {
      setTakeAssessmentStatus({
        twitter: !!user.twitterId,
        interview: new Date(nextAssessmentDate).getTime() > new Date().getTime(),
      });
    }
  }, [user]);
  return (
    <Assessments
      nextAssessmentDate={nextAssessmentDate}
      rank={rank}
      user={user}
      openAssessment={openAssessment}
      setOpenAssessment={setOpenAssessment}
      takeAssessmentStatus={takeAssessmentStatus}
      takeAssessment={takeAssessment}
    />
  )
}
