import { FC, useState } from "react";
import { SignUp } from "./SignUp";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/auth.hook";
import { useSearchParams } from "react-router-dom";
import { TSignupUser, TRegisterError } from "@/types";

export const SignUpContainer: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const referralCode = searchParams.get("ref");
  const [formData, setFormData] = useState<TSignupUser>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: referralCode ?? undefined,
  });
  console.log(formData.referralCode)
  const [error, setError] = useState<TRegisterError>({
    username: "",
    email: "",
    password: "",
    referralCode: ""
  })
  const navigate = useNavigate()
  const { register } = useAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    const signUpData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      ...(referralCode && { referralCode: formData.referralCode }),
  }
  if (!validateRegister(formData)) return;
  try {
    setIsLoading(true)
    await register(signUpData)
    navigate("/")
  } catch (error: any) {
    console.error("register error", error)
    setError(error?.response?.data)
    throw error
  } finally {
    setIsLoading(false)
  }
}

const validateRegister = (formData: TSignupUser) => {
  let isValid = true
  if (formData.username === "") {
    console.log("short?")
    setError({ ...error, username: "username is required" })
    console.log(error)
    isValid = false
  }
  console.log(error)
  if (formData.email === "") {
    setError({ ...error, email: "email is required" })
    isValid = false
  }
  if (formData.password.length < 8) {
    setError({ ...error, password: "password is too weak" })
    isValid = false
  }
  if (formData.password !== formData.confirmPassword) {
    setError({ ...error, password: "password is not matched" })
    isValid = false
  }
  console.log(error)
  return isValid
}
return <SignUp formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} error={error} isLoading={isLoading} />;
};

