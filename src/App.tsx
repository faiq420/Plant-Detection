import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetectDisease from "./Screens/DetectDisease";
import IdentifyPlant from "./Screens/IdentifyPlant";

function App() {
  return (
    <div className="App h-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DetectDisease" element={<DetectDisease />} />
          <Route path="/IdentifyPlant" element={<IdentifyPlant />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
