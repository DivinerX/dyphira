import { fetchNextAssessmentDate } from "@/redux/slices/assessment";
import { Assessments } from "./Assessments";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchRank } from "@/redux/slices/users";
import { useAuth } from "@/contexts/auth.hook";

export const AssessmentsContainer = () => {
  const { user } = useAuth();
  const [nextAssessmentDate, setNextAssessmentDate] = useState<string | null>(
    null,
  );
  const dispatch = useAppDispatch();
  const rank = useAppSelector((state) => state.user.rank);
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
  console.log(nextAssessmentDate);
  return (
    <Assessments nextAssessmentDate={nextAssessmentDate} rank={rank} user={user} />
  )
}
