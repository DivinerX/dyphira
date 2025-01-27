import { useReactMediaRecorder } from "react-media-recorder";
import { useEffect, useRef } from "react";
import { uploadRecordedVideo } from "@/redux/slices/assessment";
import { StyledBox } from "./StyledBox";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { fetchRewards } from "@/redux/slices/rewards";

type CamVideoProps = {
  assessmentCompleted: boolean;
  onRecordingStart: () => void;
  isAudioPermissionGranted: boolean;
  isVideoPermissionGranted: boolean;
};

export default function CamVideo({
  assessmentCompleted,
  onRecordingStart,
}: CamVideoProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { assessment, videoUploadStatus } = useAppSelector(
    (state) => state.assessment,
  );

  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);

  const toastId = useRef(null);

  const {
    status,
    startRecording,
    stopRecording,
    previewStream,
  } = useReactMediaRecorder({
    askPermissionOnMount: true,
    video: true,
    audio: true,
    onStart: onRecordingStart,
    onStop: (_blobUrl, blob) => handleRecordingStop(blob),
    stopStreamsOnStop: true,
  });

  const handleRecordingStop = (blob: Blob) => {
    const formData = new FormData();
    console.log(blob)
    formData.append("video", blob, "chat-video.mp4");

    dispatch(
      uploadRecordedVideo({
        assessmentId: assessment!._id,
        data: formData,
        onProgress: (progress) => {
          console.log(progress)
          if (toastId.current === null) {
            toastId.current = toast(`Uploading your video... ${Math.round(progress * 100)}%`, {
              progress,
              theme: "dark",
              position: "top-center",
              autoClose: false,
            });
          } else {
            toast.update(toastId.current, {
              progress,
              render: `Uploading your video... ${Math.round(progress * 100)}%`
            });
          }
        },
      }),
    ).then(() => {
      toast.done(toastId.current);
      dispatch(fetchRewards());
    });
  };

  useEffect(() => {
    if (videoUploadStatus === "success") {
      navigate("/assessments");
    } else if (videoUploadStatus === "error") {
      toast.error("Video upload failed. Please try again.", {
        position: "top-center",
      });
    }
  }, [videoUploadStatus, navigate]);

  useEffect(() => {
    startRecording();
  }, []);

  useEffect(() => {
    if (assessmentCompleted) {
      stopRecording();
    }
  }, [assessmentCompleted]);

  useEffect(() => {
    if (previewStream) {
      if (videoRef.current) {
        videoRef.current.srcObject = previewStream;
      }
      mediaStreamRef.current = previewStream;
    }
  }, [previewStream]);

  if (assessmentCompleted) {
    return null;
  }

  return (
    <>
      {status === "recording" && (
        <StyledBox>
          <div className='flex flex-col justify-center items-center h-[160px] bg-[#C8FFD303]'>
            {
              status === 'recording' ? (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full"
                />
              ) : (
                <span className='text-[10px] text-[#C8FFD380] uppercase'>camera off</span>
              )
            }
          </div>
        </StyledBox>
      )}
    </>
  );
}
