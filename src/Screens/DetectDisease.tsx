import React, { ChangeEvent, useState } from "react";
import upload from "../../src/assets/uploadSVG.svg";
import BarLoader from "../components/BarLoader/BarLoader";

// const key = import.meta.env.VITE_API_KEY;
const DetectDisease = () => {
  const [plantFile, setPlantFile] = useState<File | null>(null);
  const [fetching, setFetching] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  async function FetchData() {
    const formData = new FormData();
    formData.append("file", plantFile as File);

    setFetching(true);
    const url = "http://127.0.0.1:5000/predict";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        try {
          const dataRes = await response.json();
          console.log(dataRes);

          setResponse(dataRes?.prediction);
          setFetching(false);
        } catch (e) {
          setFetching(false);
          console.error(e);
        }
      })
      .catch((e) => {
        setFetching(false);
        console.error(e);
      });
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

  return (
    <div className="diseaseBg h-full flex justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00000095] to-transparent h-screen"></div>
      <div className="bg-white rounded-lg p-4 m-2 w-full md:w-8/12  z-50">
        <h3 className="text-center text-2xl font-medium font-poppins">
          Detect Plant Disease
        </h3>
        <div className="w-full md:w-7/12 mx-auto">
          <div className="w-full mt-4 grid grid-cols-2 gap-2">
            <input
              id="file-input"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="image/*"
            />
            <button
              onClick={handleButtonClick}
              className="relative btn bg-green-700 text-white rounded-none"
            >
              <img src={upload} alt="Upload Icon" className="h-5 w-5" />
              Upload
            </button>

            <button
              className="btn bg-red-600 text-white rounded-none"
              onClick={() => {
                setFileName(null);
                setPlantFile(null);
                setImagePreview(null);
                setResponse(null);
              }}
            >
              Discard File
            </button>
          </div>

          <button
            className="btn bg-green-700 mt-2 w-full text-white rounded-none"
            disabled={!plantFile || fetching}
            onClick={FetchData}
          >
            {fetching ? <BarLoader /> : "Fetch"}
          </button>
        </div>

        <div className="h-[300px] overflow-y-auto mt-4 w-full md:w-10/12 mx-auto">
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

          {response && (
            <div className="border-t border-t-gray-400 p-3 mt-3">
              <p className="font-poppins">{response}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetectDisease;
