import { Layout } from "@/components/Layout";
import { FC } from "react";
import { StyledInput } from "@/components/StyledInput";
import { StyledButton } from "@/components/StyledButton";
import logo from "@/assets/images/logo_image.svg";
import logo_text from "@/assets/images/big_logo.svg";
import personIcon from "@/assets/images/person-icon.svg";
import dialIcon from "@/assets/images/dial-icon.svg";
import fingerprintIcon from "@/assets/images/fingerprint-icon.svg";
import personPlusIcon from "@/assets/images/person-plus-icon.svg";
import { TLoginError, TLoginUser } from "@/types";

type TSignInProps = {
  formData: TLoginUser
  error: TLoginError
  setFormData: (data: TLoginUser) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const SignIn: FC<TSignInProps> = ({ formData, error, setFormData, handleSubmit }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <form className="flex flex-col items-center justify-center min-w-[478px] gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center gap-2">
            <img src={logo} alt="logo" />
            <img src={logo_text} alt="logo" className="pt-2" />
            <span className="text-[10px] text-[#C8FFF480] uppercase tracking-widest">Intelligence</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="text-[6px] text-[#C8FFD380] uppercase flex flex-row items-center justify-between py-2 w-full">
              <span>DYPHIRA INTELLIGENCE METRICS ALGORITHM</span>
              <span>#DESCRIPTION</span>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
              <div className="w-full bg-[#C8FFF440] h-[0.5px] mt-[1px]"></div>
              <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-start">
            <StyledInput
              icon={personIcon}
              placeholder="EMAIL"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {
              error.email && <span className="text-[10px] text-[#C8FFD380] uppercase pt-1">{error.email}</span>
            }
          </div>
          <div className="flex flex-col w-full justify-start">
            <StyledInput
              icon={dialIcon}
              placeholder="PASSWORD"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {
              error.password && <span className="text-[10px] text-[#C8FFD380] uppercase pt-1">{error.password}</span>
            }
            {
              error.attempts && <span className="text-[10px] text-[#C8FFD380] uppercase pt-1">Too many login attempts</span>
            }
          </div>
          <div className="flex flex-row items-center justify-start w-full">
            <p className="text-[10px] text-[#C8FFD380] uppercase">Forgot Password?</p>
          </div>
          <div></div>
          <StyledButton type="submit">
            <div className="flex flex-row items-center justify-center gap-2">
              <span>LOG IN</span>
              <img src={fingerprintIcon} alt="fingerprint icon" />
            </div>
          </StyledButton>
          <StyledButton>
            <div className="flex flex-row items-center justify-center gap-2">
              <span>CREATE ACCOUNT</span>
              <img src={personPlusIcon} alt="person plus icon" />
            </div>
          </StyledButton>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
              <div className="w-full bg-[#C8FFF440] h-[0.5px] mt-[1px]"></div>
              <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
            </div>
            <div className="text-[6px] text-[#C8FFD380] uppercase flex flex-row items-center justify-between py-2 w-full">
              <span>DYPHIRA INTELLIGENCE METRICS ALGORITHM</span>
              <span>#DESCRIPTION</span>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

