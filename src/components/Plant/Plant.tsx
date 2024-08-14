import React, { ChangeEvent, useEffect, useState } from "react";
import upload from "../../assets/uploadSVG.svg";
import BarLoader from "../BarLoader/BarLoader";
const Plant = () => {
  const [plantFile, setPlantFile] = useState<any>(null);
  const [fetching, setFetching] = useState(false);
  const [fileName, setFileName] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);


  async function FetchData() {
    const data = {
      api_key: "ZjaUTlGyEQz024sZM4BYAUIfJT5cwuHwBzkoqrKMwkGOpTsZ76",
      images: [plantFile.slice(23)],
      modifiers: ["crops_fast", "similar_images"],
      plant_language: "en",
      plant_details: [
        "common_names",
        "url",
        "name_authority",
        "taxonomy",
        "synonyms",
        "wiki_description",
      ],
    };
    setFetching(true);
    const url = "https://plant.id/api/v2/identify";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        try {
          const dataRes = await response.json();
          console.log(dataRes);
          let result: any[] = [];
          dataRes.suggestions.forEach((element: any) => {
            result.push({
              showFull: false,
              name: element.plant_name,
              commonNames: element.plant_details.common_names,
              description:
                element.plant_details.wiki_description != null
                  ? element.plant_details.wiki_description.value
                  : "",
              probability: element.probability,
              imgPath:
                element.similar_images != null
                  ? element.similar_images[0].url
                  : "",
            });
          });
          setData(result);
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
    setFileName(selectedFile);

    const reader: any = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setPlantFile(base64String);
    };
    reader.readAsDataURL(selectedFile);

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null);
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    fileInput.click();
  };

  return (
    <div className="loginBg h-full flex justify-center">
      <div className="bg-white rounded-lg p-4 m-2 sm:w-full md:w-8/12">
        <h1 className="text-center text-4xl font-raleway font-bold mt-8">
          Plant Detection Application
        </h1>
        {/* <FileBase64 onDone={handleInput} multiple={false} /> */}
        <div className="w-full md:w-7/12 mx-auto">
          <div className="w-full mt-4 flex flex-col md:flex-row justify-center  ">
            <input
              id="file-input"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            <button
              onClick={handleButtonClick}
              className="relative btn bg-green-700 w-1/2 text-white rounded-none"
            >
              <img src={upload} alt="Upload Icon" className="h-5 w-5" />
              Upload
            </button>

            {/* </div> */}

            <button
              className="btn bg-red-600 w-1/2 text-white rounded-none"
              onClick={() => {
                setFileName(null);
                setPlantFile(null);
                setImagePreview(null);
                setData([]);
              }}
            >
              Discard File
            </button>
          </div>

          <button
            className="btn bg-green-700 mt-2 w-full text-white rounded-none"
            disabled={plantFile == null || fetching}
            onClick={FetchData}
          >
            {fetching ? <BarLoader /> : "Fetch"}
          </button>
        </div>
        <div className="h-[300px] overflow-y-auto mt-4 sm:w-full w-10/12 mx-auto">
          <div className="flex justify-center">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-[200px] h-auto"
              />
            )}
            {fileName != null && (
              <p className="font-poppins ml-4">
                Selected File : {fileName.name}
              </p>
            )}
          </div>
          <div
            className={`${
              data.length > 0 && "border-t border-t-gray-400 p-3 mt-3"
            }`}
          >
            {data.map((element: any, index: number) => (
              <div
                key={index}
                className={`p-2 flex ${
                  index != data.length - 1 && "border-b border-b-gray-200"
                }`}
              >
                <img
                  src={element.imgPath}
                  alt="Preview"
                  className="w-[150px] h-[150px]"
                />
                <div className="ml-6">
                  <h3 className="font-semibold font-poppins">{element.name}</h3>
                  <p className="text-sm font-inter">
                    Commonly know by :{" "}
                    {element.commonNames != undefined &&
                      element.commonNames.join(", ")}
                  </p>
                  <p className="text-sm font-inter">
                    Probability : {element.probability}
                  </p>
                  <p className="text-sm font-inter">
                    {element.showFull
                      ? element.description
                      : element.description.slice(0, 150)}
                  </p>
                  {element.description != "" && (
                    <div className="w-full text-end">
                      <button
                        onClick={() => {
                          let dataT = [...data];
                          dataT[index]["showFull"] = !dataT[index]["showFull"];
                          setData(dataT);
                        }}
                        className="btn btn-ghost text-sm font-inter"
                      >
                        View {element.showFull ? "Less" : "More"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <FileBase64 multiple={false} onDone={handleInput} />
      {plantFile && plantFile?.base64.slice(23)}
      <button onClick={FetchData}>Click</button> */}
    </div>
  );
};

export default Plant;
