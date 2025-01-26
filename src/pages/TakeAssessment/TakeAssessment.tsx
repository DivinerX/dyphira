import { FC } from 'react'
import { Layout } from '@/components/Layout'
import { StyledBox, StyledBoxWithoutWhiteCorners } from '@/components/StyledBox'
import soundIcon from '@/assets/images/sound-icon.svg'
import microphoneIcon from '@/assets/images/microphone-icon.svg'
import cameraIcon from '@/assets/images/camera-icon.svg'
import spectre from '@/assets/images/spectre.svg'
import CamVideo from '@/components/CameraVideo'

type TTakeAssessment = {
  assessmentCompleted: boolean,
  assessment: any
  status: string,
  handleRecordingStart: () => void,
  handleNextQuestion: () => void,
  startAssessment: () => void,
  processQuestionCompletion: () => void,
  isAudioPermissionGranted: boolean,
  isVideoPermissionGranted: boolean,
}

export const TakeAssessment: FC<TTakeAssessment> = ({
  assessmentCompleted,
  assessment,
  status,
  handleRecordingStart,
  handleNextQuestion,
  startAssessment,
  processQuestionCompletion,
  isAudioPermissionGranted,
  isVideoPermissionGranted
}) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full">
        <div className='w-[70%]'>
          <StyledBox className='w-full'>
            <div className='bg-[#C8FFD306] w-full px-2'>
              <span className='text-[10px] uppercase'>assessment in progress</span>
            </div>
            <div className="flex flex-col justify-center items-center w-full p-4">
              <div className='flex flex-col justify-center items-start h-1 bg-[#C8FFD380] rounded-full w-full'>
                <div className='h-1 bg-[#E4FFEA] w-2/3 rounded-full'></div>
              </div>

              <div className='flex flex-row justify-between items-center py-2 w-full'>
                <div className='flex flex-col justify-center items-start'>
                  <span className='text-[12px]'>00:06:30</span>
                  <span className='text-[10px] text-[#C8FFF480] uppercase'>time left</span>
                </div>
                <div className='flex flex-col justify-center items-end'>
                  <span className='text-[12px]'>12/15</span>
                  <span className='text-[10px] text-[#C8FFF480] uppercase'>progress</span>
                </div>
              </div>

              <div className='flex flex-col justify-center items-center py-12 w-full text-[12px] text-[#E4FFEA] uppercase text-center gap-8 [text-shadow:0_0_15px_rgba(70,255,91,0.25),0_0_2px_rgba(125,255,151,0.5)]'>
                <p >Imagine you’re presenting an investment thesis<br /> for a controversial or misunderstood technology.</p>
                <p >What’s your framework for converting skeptics<br /> into believers?</p>
              </div>

              <div className='flex flex-row justify-between items-end w-full'>
                <Spectrum />
                <CamVideo
                  assessmentCompleted={assessmentCompleted}
                  onRecordingStart={handleRecordingStart}
                  isAudioPermissionGranted={isAudioPermissionGranted}
                  isVideoPermissionGranted={isVideoPermissionGranted}
                />
                <StyledBox>
                  <div className='flex flex-col justify-center items-center h-[140px] w-[250px] bg-[#C8FFD303]'>
                    <span className='text-[10px] text-[#C8FFD380] uppercase'>camera off</span>
                  </div>
                </StyledBox>
              </div>

              <div className="flex flex-row items-center justify-between py-4 w-full">
                <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
                <div className="w-full bg-[#C8FFF440] h-[0.5px]"></div>
                <div className="w-[2px] h-[2px] rotate-45 bg-[#C8FFF440]"></div>
              </div>

              <div className="flex flex-row justify-between items-start w-full">
                <div className="flex flex-col justify-center items-start">
                  <span className='text-[14px] uppercase'>dyphira assessment #2</span>
                  <span className='text-[10px] text-[#C8FFF480] uppercase'>IN PROGRESS</span>
                </div>

                <div className="flex flex-row justify-center items-center gap-2">
                  <StyledBoxWithoutWhiteCorners>
                    <div className="p-2 bg-[#C8FFD310] h-8 w-8 flex flex-col justify-center items-center">
                      <img src={soundIcon} alt="sound icon" />
                    </div>
                  </StyledBoxWithoutWhiteCorners>
                  <StyledBoxWithoutWhiteCorners>
                    <div className="p-2 bg-[#C8FFD310] h-8 w-8 flex flex-col justify-center items-center">
                      <img src={microphoneIcon} alt="microphone icon" />
                    </div>
                  </StyledBoxWithoutWhiteCorners>
                  <StyledBoxWithoutWhiteCorners>
                    <div className="p-2 bg-[#C8FFD310] h-8 w-8 flex flex-col justify-center items-center">
                      <img src={cameraIcon} alt="camera icon" />
                    </div>
                  </StyledBoxWithoutWhiteCorners>
                </div>

                <StyledBoxWithoutWhiteCorners>
                  {
                    assessmentCompleted ?
                      <div className="text-2xl font-semibold">Assessment Completed</div> :
                      assessment ? (
                        <span
                          className='text-[10px] text-[#C8FFD3] uppercase px-6 pb-1 pt-[6px] bg-[#C8FFD30D] flex flex-row items-center gap-1 cursor-pointer'
                          onClick={processQuestionCompletion}
                        >
                          end assessment
                          <div className='w-[6px] h-[6px] bg-[#C8FFD3] rounded-sm -mt-[2px]'></div>
                        </span>
                      ) : (
                        <span
                          className='text-[10px] text-[#C8FFD3] uppercase px-6 pb-1 pt-[6px] bg-[#C8FFD30D] flex flex-row items-center gap-1 cursor-pointer'
                          onClick={startAssessment}
                        >
                          start assessment
                          <div className='w-[6px] h-[6px] bg-[#C8FFD3] rounded-sm -mt-[2px]'></div>
                        </span>
                      )
                  }

                </StyledBoxWithoutWhiteCorners>
              </div>
            </div>
          </StyledBox>
        </div>
      </div>
    </Layout>
  )
}

const Spectrum = () => {
  return (
    <img src={spectre} alt="spectre" />
  )
};
