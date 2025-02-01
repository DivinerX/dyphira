import { FC, useEffect, useState } from "react";
import { Metrics } from "./Metrics";
import { useAppSelector } from "@/redux/hooks";
import { useAppDispatch } from "@/redux/hooks";
import { fetchAvgScoreList, fetchUserAssessments } from "@/redux/slices/users";
import { TAssessmentScore } from "@/types";
import { extractScore } from "@/utils/extractScore";

export const MetricsContainer: FC = () => {
  const dispatch = useAppDispatch();
  const { assessments, avgScoreList } = useAppSelector((state) => state.user);
  const [score, setScore] = useState<TAssessmentScore>({
    confidence: 0,
    knowledgeability: 0,
    determination: 0,
    evangelism: 0,
    workEthic: 0,
    vision: 0,
    interests: 0,
    pastWorkQuality: 0,
    intelligence: 0,
    personality: 0,
    horsepower: 0,
    hustle: 0,
    curiosity: 0,
    focus: 0,
    ferocity: 0,
  });
  const [averageScore, setAverageScore] = useState<number>(0);
  useEffect(() => {
    dispatch(fetchUserAssessments());
    dispatch(fetchAvgScoreList());
  }, []);
  useEffect(() => {
    let rawScores = assessments.map((assessment) => assessment.ranking);
    let jsonScores = rawScores.map((score) => extractScore(score).content);

    let scores = jsonScores.map((score) => ({
      confidence: getScore(score, "Confidence"),
      knowledgeability: getScore(score, "Knowledgeability"),
      determination: getScore(score, "Determination"),
      evangelism: getScore(score, "Evangelism"),
      workEthic: getScore(score, "Work Ethic"),
      vision: getScore(score, "Vision"),
      interests: getScore(score, "Interests"),
      pastWorkQuality: getScore(score, "Past Work Quality"),
      intelligence: getScore(score, "Intelligence"),
      personality: getScore(score, "Personality"),
      horsepower: getScore(score, "Horsepower"),
      hustle: getScore(score, "Hustle"),
      curiosity: getScore(score, "Curiosity"),
      focus: getScore(score, "Focus"),
      ferocity: getScore(score, "Ferocity"),
    }));
    const score = scores.reduce((acc, curr) => {
      return {
        confidence: acc.confidence + curr.confidence,
        knowledgeability: acc.knowledgeability + curr.knowledgeability,
        determination: acc.determination + curr.determination,
        evangelism: acc.evangelism + curr.evangelism,
        workEthic: acc.workEthic + curr.workEthic,
        vision: acc.vision + curr.vision,
        interests: acc.interests + curr.interests,
        pastWorkQuality: acc.pastWorkQuality + curr.pastWorkQuality,
        intelligence: acc.intelligence + curr.intelligence,
        personality: acc.personality + curr.personality,
        horsepower: acc.horsepower + curr.horsepower,
        hustle: acc.hustle + curr.hustle,
        curiosity: acc.curiosity + curr.curiosity,
        focus: acc.focus + curr.focus,
        ferocity: acc.ferocity + curr.ferocity,
      };
    }, {
      confidence: 0,
      knowledgeability: 0,
      determination: 0,
      evangelism: 0,
      workEthic: 0,
      vision: 0,
      interests: 0,
      pastWorkQuality: 0,
      intelligence: 0,
      personality: 0,
      horsepower: 0,
      hustle: 0,
      curiosity: 0,
      focus: 0,
      ferocity: 0,
    });
    setScore(score);
    const average = Object.values(score).reduce((acc, curr) => acc + curr, 0) / Object.values(score).length;
    setAverageScore(average);
  }, [assessments]);
  console.log(avgScoreList);
  return <Metrics score={score} averageScore={averageScore} avgScoreList={avgScoreList} />;
};

const getScore = (jsonScores: any[], scoreName: string) => {
  return jsonScores.find((score) => score.category.toLowerCase() === scoreName.toLowerCase())?.score;
};

