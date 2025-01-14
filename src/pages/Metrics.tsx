import { FC } from "react";
import { Layout } from "../components/Layout";

export const Metrics: FC = () => {
  return (
    <Layout>
      <div className="flex-1 flex flex-row justify-start items-start gap-10">
        <div>test rating</div>
        <div>test summary</div>
        <div>lobe diargram</div>
      </div>
    </Layout>
  );
};
