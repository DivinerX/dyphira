import { useReactMediaRecorder } from "react-media-recorder";
import { useEffect, useRef, useState } from "react";
import { uploadRecordedVideo } from "@/redux/slices/assessment";
import clsx from "clsx";
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
  isAudioPermissionGranted,
  isVideoPermissionGranted,
}: CamVideoProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { assessment, videoUploadStatus } = useAppSelector(
    (state) => state.assessment,
  );

  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);

  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const toastId = useRef(null);

  const {
    status,
    startRecording,
    stopRecording,
    previewStream,
    isAudioMuted,
    muteAudio,
    unMuteAudio,
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

  const toggleAudio = () => {
    if (isAudioMuted) {
      unMuteAudio();
    } else {
      muteAudio();
    }
  };

  // console.log("status", status)

  const toggleVideo = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current
        .getVideoTracks()
        .forEach((track) => (track.enabled = !isVideoEnabled));
    }
    setIsVideoEnabled((prev) => !prev);
  };

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
      <div className="flex gap-2 z-50 items-center justify-center min-[1100px]:mt-0 md:mt-28 mt-12 lg:-ml-[35%] md:-ml-[20%] min-[1260px]:-ml-12">
        <button
          className={clsx(
            "bg-purple-fade w-12 h-12 flex items-center justify-center rounded-[5px]",
            !isAudioPermissionGranted && "opacity-50",
          )}
          onClick={toggleAudio}
          disabled={!isAudioPermissionGranted}
        >
          {isAudioMuted || !isAudioPermissionGranted ? (
            <img src="/voice.svg" alt="un-mute voice" />
          ) : (
            <img src="/voice2.svg" alt="mute voice" />
          )}
        </button>
        <button
          className={clsx(
            "bg-purple-fade w-12 h-12 flex items-center justify-center rounded-[5px]",
            !isVideoPermissionGranted && "opacity-50",
          )}
          onClick={toggleVideo}
          disabled={!isVideoPermissionGranted}
        >
          {!isVideoEnabled || !isVideoPermissionGranted ? (
            <img src="/video.svg" alt="" width={30} />
          ) : (
            <img src="/video2.svg" alt="" width={30} />
          )}
        </button>
      </div>
      {status === "recording" && (
        <div className="bg-[#1E2748] rounded-lg p-2 w-fit m-auto md:mt-0 mt-6 md:absolute bottom-6 right-6 cursor-pointer z-50">
          <p>{status}</p>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{ width: "300px", height: "168px", objectFit: "cover" }}
          />
        </div>
      )}
    </>
  );
}
