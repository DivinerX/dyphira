import { FC, useState } from "react";
import { SignUp } from "./SignUp";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/auth.hook";
import { TSignupUser } from "@/types";

export const SignUpContainer: FC = () => {
  const [formData, setFormData] = useState<TSignupUser>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const navigate = useNavigate()
  const { register } = useAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    try {
      await register(formData)
      navigate("/")
    } catch (error) {
      console.error("register error", error)
      throw error
    }
  }
  return <SignUp formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />;
};

