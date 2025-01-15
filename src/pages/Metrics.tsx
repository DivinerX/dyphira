import { FC, ReactNode } from "react";
import { Layout } from "../components/Layout";
import titleDecorator from "../assets/images/title-decorator.svg";
import { TestRating } from "@/components/TestRating";

export const Metrics: FC = () => {
  return (
    <Layout>
      <div className=" w-full flex flex-row justify-start items-start gap-10">
        <TestRating />
      </div>
    </Layout>
  );
};
