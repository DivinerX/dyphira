import { Layout } from "@/components/Layout";
import { FC } from "react";

const Loading: FC = () => {
  return (
    <Layout>
      <div className="flex-1 flex justify-center items-center">
        <div className="">
          <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
        </div>
      </div>
    </Layout>
  )
}

export default Loading;
