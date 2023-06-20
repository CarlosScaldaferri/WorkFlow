import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage/LoginPage";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
    </Routes>
  );
};
