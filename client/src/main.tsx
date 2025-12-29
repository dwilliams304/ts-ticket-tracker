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
import ProtectedRoute from "./components/common/ProtectedRoute";
import Landing from "./components/pages/Landing/Landing";
import { UserContext } from "./utils/UserContext";



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
      name: "James Gordon",
      email: "test@example.com",
      permissions: ["boardeditor", "admin"],
      image: "noref",
      currentBoards: ["0"]
    };

    setUser(testUser);
  }

  const handleLogout = () => {
    setUser(null);
  }


  return(
    <UserContext.Provider value={user}>
      <NavHeader 
        user={user}
        login={handleLogin}
        logout={handleLogout}
      />

      <Routes>
        <Route index element={<Landing />} />
        {
          PageRoutes.map((route, i) => 
            !route.protectedRoute 
            ?
            (
              <Route
                key={i}
                path={route.path}
                element={ <route.element /> }
              />
            )
            :
            (
              <Route 
                key={i}
                element={
                <ProtectedRoute isAllowed={user !== null} />
                }>
                  <Route path={route.path} element={<route.element />} />
              </Route>
            )
        )
        }
      </Routes>
    </UserContext.Provider>
  )
}