import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./reset.css";
import "./index.css";

import { 
  NavHeader, 
} from "./components/layout";

import { PageRoutes as PageRoutes } from "./data/pageroutes";



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)


export function App(){
  return(
    <>
      <NavHeader 
      
      />

      <Routes>
        {
          PageRoutes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={ <route.element />}
            />
          ))
        }
      </Routes>
    </>
  )
}