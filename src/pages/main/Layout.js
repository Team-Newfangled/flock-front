import React from "react";
import Chat from "../../components/chat/Chat.js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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