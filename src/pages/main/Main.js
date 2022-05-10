import React from "react";
import "../../styles/main.scss";
import Chat from "../../components/chat/Chat.js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <div className="test"></div>
      <Chat />
      <Footer />
    </>
  );
};

export default Main;