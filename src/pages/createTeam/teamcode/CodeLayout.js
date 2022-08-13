import React from "react";
import Header from "../../../components/Header";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main style={{height: '100vh'}}>{children}</main>
    </>
  );
};

export default Layout;