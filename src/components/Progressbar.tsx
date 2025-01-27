import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateAssessment } from "@/redux/slices/assessment";

export default function ProgressBarComp() {
  const { assessment } = useAppSelector((state) => state.assessment);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAssessmentCompleted = assessment?.status === "completed";
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!assessment) return;

    if (isAssessmentCompleted) {
      setProgress(assessment?.duration!);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        // Check if time is up
        if (newProgress >= assessment?.duration!) {
          clearInterval(interval);
          // Mark assessment as completed to trigger video submission
          dispatch(
            updateAssessment({
              assessmentId: assessment._id,
              completedAt: new Date().toISOString(),
              status: "timeout",
            }),
          )
            .unwrap()
            .then(() => {
              toast.error("Assessment time has expired!", {
                theme: "dark",
                position: "top-center",
                autoClose: 5000,
              });
            });
        }
        return newProgress;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [assessment, dispatch, navigate]);

  return (
    <>
      <div className='flex flex-col justify-center items-start h-1 bg-[#C8FFD380] rounded-full w-full'>
        <div
          className='h-1 bg-[#E4FFEA] rounded-full'
          style={{
            width: `${(progress / assessment?.duration!) * 100}%`,
          }}
        ></div>
      </div>

      <div className='flex flex-row justify-between items-center py-2 w-full'>
        <div className='flex flex-col justify-center items-start'>
          <span className='text-[12px]'>{Math.floor((assessment?.duration! - progress) / 60)}:{(assessment?.duration! - progress) % 60}</span>
          <span className='text-[10px] text-[#C8FFF480] uppercase'>time left</span>
        </div>
        <div className='flex flex-col justify-center items-end'>
          <span className='text-[12px]'>12/15</span>
          <span className='text-[10px] text-[#C8FFF480] uppercase'>progress</span>
        </div>
      </div>
    </>
  );
}
