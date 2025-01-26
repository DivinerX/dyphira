import { FC, useState } from "react";
import { SignIn } from "./SignIn";
import { useAuth } from "@/contexts/auth.hook";
import { useNavigate } from "react-router-dom";
import { TLoginUser } from "@/types";

export const SignInContainer: FC = () => {
  const [formData, setFormData] = useState<TLoginUser>({
    email: "",
    password: "",
  })
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    try {
      await login(formData)
      navigate("/")
    } catch (error) {
      console.error("login error", error)
      throw error
    }
  }

  return <SignIn
    formData={formData}
    setFormData={setFormData}
    handleSubmit={handleSubmit}
  />;
};

