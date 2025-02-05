import { FC, useState } from "react";
import { SignIn } from "./SignIn";
import { useAuth } from "@/contexts/auth.hook";
import { useNavigate } from "react-router-dom";
import { TLoginError, TLoginUser } from "@/types";

export const SignInContainer: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<TLoginUser>({
    email: "",
    password: "",
  })
  const [error, setError] = useState<TLoginError>({
    email: "",
    password: "",
    attempts: false,
  })
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    try {
      setIsLoading(true)
      await login(formData)
      navigate("/")
    } catch (err: any) {
      console.error("login error", err)
      setError({
        email: err.response.data.email,
        password: err.response.data.password,
        attempts: typeof err.response.data === "string"
      })
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return <SignIn
    isLoading={isLoading}
    formData={formData}
    error={error}
    navigate={navigate}
    setFormData={setFormData}
    handleSubmit={handleSubmit}

  />;
};

