import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App"; 
import { ModelS, Header, Model3, ModelX, SolarPanels, SolarRoof, ModelY, Footer } from "@pages"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<ModelS />} />
      <Route path="header" element={<Header />} />
      <Route path="model-3" element={<Model3 />} />
      <Route path="model-x" element={<ModelX />} />
      <Route path="model-y" element={<ModelY />} />
      <Route path="solar-panels" element={<SolarPanels />} />
      <Route path="solar-roof" element={<SolarRoof />} />
      <Route path="footer" element={<Footer />} /> 
     
    </Route>
  )
);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
