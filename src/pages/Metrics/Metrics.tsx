import { FC } from "react";
import { Layout } from "@/components/Layout";
import { TestRating } from "@/components/TestRating";
import { TestSummary } from "@/components/TestSummary";
import { Lobe } from "@/components/Lobe";
import back_logo from "@/assets/images/back-logo.svg";
import { TAssessmentScore } from "@/types";

type MetricsProps = {
  score: TAssessmentScore;
  averageScore: number;
  avgScoreList: any;
  rank: any;
};

export const Metrics: FC<MetricsProps> = ({ score, averageScore, avgScoreList, rank }) => {
  return (
    <Layout>
      <div className=" w-full flex flex-row justify-start items-start gap-4">
        <TestRating score={score} averageScore={averageScore} avgScoreList={avgScoreList} rank={rank} />
        <TestSummary />
        <Lobe score={score} averageScoreList={avgScoreList} rank={rank} />
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <img src={back_logo} alt="back-logo" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-100%]" />
      </div>
    </Layout>
  );
};
