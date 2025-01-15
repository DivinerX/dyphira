import { FC } from "react";
import { Layout } from "../components/Layout";
import { TestRating } from "@/components/TestRating";
import { TestSummary } from "@/components/TestSummary";
export const Metrics: FC = () => {
  return (
    <Layout>
      <div className=" w-full flex flex-row justify-start items-start gap-10">
        <TestRating />
        <TestSummary />
      </div>
    </Layout>
  );
};
