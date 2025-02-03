import React, { ChangeEvent, useState } from "react";
import upload from "../../src/assets/uploadSVG.svg";
import BarLoader from "../components/BarLoader/BarLoader";
import WebcamCapture from "../components/WebcamCapture";
import axios from "axios";
// const key = import.meta.env.VITE_API_KEY;
const IdentifyPlant = () => {
  const [plantFile, setPlantFile] = useState<File | null>(null);
  const [fetching, setFetching] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [plantName, setPlantName] = useState<string | null>(null);
  const [openWebCam, setOpenWebCam] = useState(false);

  async function FetchData() {
    const formData = new FormData();
    formData.append("file", plantFile as File);
    setFetching(true);
    const url =
      "https://87a8-2400-adc1-4ac-7100-4101-81a-a40d-573c.ngrok-free.app/predict";

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setPlantName(response.data.prediction);
    } catch (error: any) {
      setPlantName(error.response.data.message);
    } finally {
      setFetching(false);
    }
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFileName(selectedFile.name);
      setPlantFile(selectedFile);

      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFileName(null);
      setPlantFile(null);
      setImagePreview(null);
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    fileInput.click();
  };

  const handleWebcamToggle = () => {
    setOpenWebCam(!openWebCam);
  };

  const fetchCamResponse = (img: any) => {
    const fileName = "uploaded_file.jpg";
    const file = base64ToFile(img, fileName);
    setPlantFile(file);
    setFileName(fileName);
    setImagePreview(img);
    setOpenWebCam(false);
  };

  const base64ToFile = (base64String: string, fileName: string) => {
    const byteString = atob(base64String.split(",")[1]);
    const arrayBuffer = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      arrayBuffer[i] = byteString.charCodeAt(i);
    }
    return new File([arrayBuffer], fileName, { type: "image/jpeg" });
  };

  return (
    <div className="plantsBg h-full flex justify-center">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#00000095] to-transparent"></div> */}
      <div className="bg-white h-max rounded-lg p-4 m-2 w-full md:w-8/12">
        <h3 className="text-center text-2xl font-medium font-poppins">
          Plants Identification
        </h3>
        <div className="w-full md:w-9/12 mx-auto">
          <div className="w-full mt-4 grid grid-cols-[30%_30%_40%]">
            <input
              id="file-input"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="image/*"
            />
            <button
              onClick={handleButtonClick}
              className="relative btn bg-green-700 text-white rounded-none mb-2 md:mb-0 md:mr-2"
            >
              <img src={upload} alt="Upload Icon" className="h-5 w-5" />
              Upload
            </button>
            <button
              onClick={handleWebcamToggle}
              className="relative flex flex-col btn bg-green-700 text-white rounded-none mb-2 md:mb-0 md:mr-2"
            >
              <span>
                <i className="fa fa-camera text-[20px] text-white mr-2"></i>
                {openWebCam ? "Close" : "Open"} Webcam
              </span>
            </button>

            <button
              className="btn bg-red-600 text-white rounded-none"
              onClick={() => {
                setFileName(null);
                setPlantFile(null);
                setImagePreview(null);
                setPlantName(null);
              }}
            >
              Discard File
            </button>
          </div>
          {openWebCam && <WebcamCapture sendWebcamImage={fetchCamResponse} />}

          <button
            className="btn bg-green-700 mt-2 w-full text-white rounded-none"
            disabled={!plantFile || fetching}
            onClick={FetchData}
          >
            {fetching ? <BarLoader /> : "Fetch"}
          </button>
        </div>

        <div className="max-h-[300px] overflow-y-auto mt-4 w-full md:w-10/12 mx-auto">
          <div className="flex justify-center">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-[200px] h-auto"
              />
            )}
            {fileName && (
              <p className="font-poppins ml-4 text-sm">
                Selected File: {fileName}
              </p>
            )}
          </div>

          {plantName && (
            <div className="border-t border-t-gray-400 p-3 mt-3">
              <p className="font-poppins">Detected Plant: {plantName}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IdentifyPlant;
