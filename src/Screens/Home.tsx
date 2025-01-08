import React from "react";

const Home = () => {
  return (
    <div className="text-gray-800 font-raleway bg-[#fffefc]">
      <section className="p-8 text-center loginBg h-screen flex flex-col justify-center ">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to AgriVision!
        </h1>
        <p className="text-lg text-white mb-8">
          Revolutionize Your Garden: Smart Identification, Instant Diagnosis,
          Better Growth.
        </p>
      </section>

      {/* <!-- Vision Section --> */}
      <section id="vision" className="p-8">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-4">
          Vision
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6 text-sm">
          Food security is important for billions of people. To keep crops
          healthy, we need to manage plant health well. Spotting plant diseases
          quickly can help reduce damage and increase how much we grow. We've
          made new ways to find these diseases that can boost crop yields and
          cut down on harmful pesticides.
          <br />
          <br />
          While improving crop varieties is key, we also need to focus on
          disease detection. Old methods, like farmers checking plants by hand,
          can take a lot of time and money. Our app solves this problem. It
          automatically finds diseases on fruits, vegetables, and plant leaves.
          This offers a faster and easier way than traditional methods.
        </p>
      </section>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <section id="features" className="p-8">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-4">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
          <div className="p-4 lg:mt-4 mt-3 rounded-lg shadow-lg text-center">
            <div className="">
              <div className="about-icon mb-md-4 mb-3">
                <i className="fa fa-viadeo text-4xl text-green-900"></i>
              </div>
              <div className="">
                <p className="pb-3 text-sm">Easy Detection</p>
                <p className="text-xs">Just need to click and upload image.</p>
              </div>
            </div>
          </div>
          <div className=" p-4 lg:mt-4 mt-3 rounded-lg shadow-lg text-center">
            <div className="ser-Agriculture-grid">
              <div className="about-icon mb-md-4 mb-3">
                <i
                  className="fa fa-pagelines text-4xl text-green-900"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="">
                <p className="pb-3 text-sm">Cause and Solution</p>
                <p className="text-xs">
                  Provides the cause and solution of the identified diseases.
                </p>
              </div>
            </div>
          </div>
          <div className=" p-4 lg:mt-4 mt-3 rounded-lg shadow-lg text-center">
            <div className="ser-Agriculture-grid">
              <div className="about-icon mb-md-4 mb-3">
                <i
                  className="fa fa-leaf text-4xl text-green-900"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="">
                <p className="pb-3 text-sm">Large Plant Support</p>
                <p className="text-xs">
                  Supports around 14 different types of plants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
