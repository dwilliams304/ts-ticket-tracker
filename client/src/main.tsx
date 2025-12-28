import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./reset.css";
import "./index.css";

import { 
  NavHeader, 
} from "./components/layout";

import { PageRoutes as PageRoutes } from "./data/pageroutes";
import { User } from "./types";



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)


export function App(){
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => {
    let testUser: User = {
      id: "1",
      name: "Davis W",
      email: "test@example.com",
      permissions: ["boardeditor", "admin"],
      image: "noref"
    };

    setUser(testUser);
    console.log(`Logged in: ${JSON.stringify(testUser)}`);
  }

  const handleLogout = () => {
    setUser(null);
    console.log("Logged out!");
  }


  return(
    <>
      <NavHeader 
        user={user}
        login={handleLogin}
        logout={handleLogout}
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