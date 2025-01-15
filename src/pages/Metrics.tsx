import { FC } from "react";
import { Layout } from "../components/Layout";
import { TestRating } from "@/components/TestRating";
import { TestSummary } from "@/components/TestSummary";
import { Lobe } from "@/components/Lobe";
import back_logo from "@/assets/images/back-logo.svg";

export const Metrics: FC = () => {
  return (
    <Layout>
      <div className="absolute top-0 left-0 w-full h-screen -z-10">
        <img src={back_logo} alt="back-logo" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-100%] " />
      </div>
      <div className=" w-full flex flex-row justify-start items-start gap-4">
        <TestRating />
        <TestSummary />
        <Lobe />
      </div>
    </Layout>
  );
};
