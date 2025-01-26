import { useState, useEffect } from "react";

export const useMediaPermissions = () => {
  const [audioError, setAudioError] = useState<string | null>(null);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);

  useEffect(() => {
    const requestMediaPermissions = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        });
        stream.getTracks().forEach((track) => track.stop());
        setIsAudioEnabled(true);
        setIsVideoEnabled(true);
        setAudioError(null);
        setVideoError(null);
      } catch (error: any) {
        // Handle specific permission errors
        console.log(error)
        if (
          error.name === "NotAllowedError" ||
          error.name === "PermissionDeniedError"
        ) {
          setAudioError(
            "Please allow microphone access in your browser settings",
          );
          setVideoError("Please allow camera access in your browser settings");
          setIsAudioEnabled(false);
          setIsVideoEnabled(false);
        } else if (
          error.name === "NotFoundError" ||
          error.name === "DevicesNotFoundError"
        ) {
          setAudioError("No microphone found");
          setVideoError("No camera found");
          setIsAudioEnabled(false);
          setIsVideoEnabled(false);
        } else {
          setAudioError(`Microphone error: ${error.message}`);
          setVideoError(`Camera error: ${error.message}`);
          setIsAudioEnabled(false);
          setIsVideoEnabled(false);
        }
      }
    };

    requestMediaPermissions();
  }, []);

  return { isAudioEnabled, audioError, isVideoEnabled, videoError };
};
