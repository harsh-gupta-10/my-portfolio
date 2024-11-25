import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Home from "./components/Home.jsx";
import About from "./components/Pages/About.jsx";
import Contact from "./components/Pages/Contact.jsx";
import Products from "./components/Pages/Products.jsx" // Import Contact component
import Error404 from "./components/Pages/Error404.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements, 
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Error503 from "./components/Pages/Error503.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<Products />} />
      <Route path="error" element={<Error503 />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);