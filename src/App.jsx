import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Header from "./pages/header";
import Footer from "./pages/footer";

function App() {
  const [activeLink, setActiveLink] = useState('/');

  return (
    <>
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />
      <Outlet context={[activeLink, setActiveLink]} /> 
      <Footer />
    </>
  );
}

export default App;
