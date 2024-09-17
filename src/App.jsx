import { Outlet } from "react-router-dom";
import Header from "./pages/header";
import  Footer  from "./pages/footer";

function App() {
  return (
    <>
     <Header/>
      <Outlet /> 
    <Footer/>
    </>
  );
}

export default App;
