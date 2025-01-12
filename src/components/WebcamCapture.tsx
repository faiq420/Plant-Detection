import { useEffect, useRef, useState } from "react";
import SubmitBtn from "./Buttons/SubmitBtn";
interface Props {
  sendWebcamImage: (img: any) => void;
}

const WebcamCapture = ({ sendWebcamImage }: Props) => {
  const webcamRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [cameraAccessErr, setCameraAccessErr] = useState<string>("");

  useEffect(() => {
    const getWebcamStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (webcamRef.current) {
          webcamRef.current.srcObject = stream;
        }
      } catch (err: any) {
        setCameraAccessErr("Requested camera device not found.");
        // console.error("Error accessing webcam:", err);
      }
    };
    getWebcamStream();

    return () => {
      if (webcamRef.current && webcamRef.current.srcObject) {
        const stream = webcamRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    if (canvasRef.current && webcamRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx && webcamRef.current) {
        ctx.drawImage(
          webcamRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        console.log(canvasRef.current);
        const dataUri = canvasRef.current.toDataURL("image/jpeg");
        setCapturedImage(dataUri);
      }
    }
  };

  const clearCanvas = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
      console.log(canvasRef.current);
    }
  };

  return (
    <>
      <div className="md:flex">
        <div className="flex-1 flex space-x-1">
          <video
            ref={webcamRef}
            width="200"
            height="160"
            className="h-full"
            autoPlay
            muted
          ></video>
          <div className="flex items-end w-full">
            {capturedImage == null ? (
              <div className="mb-2">
                <SubmitBtn text="Capture Image" clickEvent={captureImage} />
              </div>
            ) : (
              <div className="flex w-2/3 items-end justify-end space-x-2 mb-2">
                <div
                  className="p-3 h-4 w-4 flex justify-center items-center rounded-full border border-green-700 cursor-pointer"
                  onClick={() => {
                    sendWebcamImage(capturedImage);
                  }}
                >
                  <i className="fa fa-check text-[20px] text-green-700" title="Proceed"></i>
                </div>
                <div
                  className="p-3 h-4 w-4 flex justify-center items-center rounded-full border border-gray-700 cursor-pointer"
                  onClick={() => {
                    clearCanvas();
                    setCapturedImage(null);
                  }}
                >
                  <i className="fa fa-refresh text-[20px] text-gray-700" title="Retake"></i>
                </div>
              </div>
            )}
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width={200}
          height={160}
          className="mt-2"
        ></canvas>
      </div>
    </>
  );
};

export default WebcamCapture;
