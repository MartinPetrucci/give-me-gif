import React from "react";
import { Footer } from "./components/ui/Footer";
import { Header } from "./components/ui/Header";
import { MainContent } from "./components/ui/MainContent";
import { Sidebar } from "./components/ui/Sidebar";
const GiveMeGifApp = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Sidebar />
        <MainContent />
        <div className="another-sidebar"></div>
        <Footer />
      </div>
    </>
  );
};

export default GiveMeGifApp;
