import React from "react";
import Chat from "../common/chat/Chat.js";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Chat />
      <Footer />
    </>
  );
};

export default Layout;