import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./PublicRouter";
import { PrivateRoute } from "./PrivateRouter";
import { LoginPages } from "../auth/pages/LoginPages";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute>
              {/* <LoginPage /> */}
              <Routes>
                <Route path="/*" element={<LoginPages />} />
              </Routes>
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />

        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={ <HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
