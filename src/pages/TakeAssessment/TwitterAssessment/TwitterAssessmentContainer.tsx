import storage from "@/utils/storage";
import { TwitterAssessment } from "./TwitterAssessment";
import { useAuth } from "@/contexts/auth.hook";
import { TUser } from "@/types";
export const TwitterAssessmentContainer = () => {
  const { user } = useAuth();
  
  const openAccount = (provider: string) => {
    switch (provider) {
      case "twitter":
        window.open(
          `https://twitter.com/i/user/${user?.twitterId}`,
          "_blank",
          "noreferrer",
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/in/${user?.linkedinId}`,
          "_blank",
          "noreferrer",
        );
        break;

      default:
        console.log("Uknown strategy");
    }
  };
  
  const accountLinked = (provider: string) => {
    return !!user?.[`${provider}Id` as keyof TUser];
  };

  const handleLinkAccount = (provider: string) => () => {
    if (accountLinked(provider)) {
      openAccount(provider);
    } else {
      const accessToken = storage.getAccessToken();
      window.location.href = `${import.meta.env.VITE_BASE_API_URL}/social/${provider}?accessToken=${accessToken}`;
    }
  };
  
  return <TwitterAssessment user={user} handleLinkAccount={handleLinkAccount} />;
};



