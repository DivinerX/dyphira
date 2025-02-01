import { fetchNextAssessmentDate } from "@/redux/slices/assessment";
import { Assessments } from "./Assessments";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";

export const AssessmentContainer = () => {
  const [nextAssessmentDate, setNextAssessmentDate] = useState<string | null>(
    null,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
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
    <Assessments nextAssessmentDate={nextAssessmentDate} />
  )
}
