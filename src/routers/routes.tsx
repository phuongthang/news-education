import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayoutContainer from "../layouts/DefaultLayoutContainer";

const HomePageContainer = lazy(() => import("../pages/home/HomePageContainer"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayoutContainer />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePageContainer />} />
      </Route>
    </Routes>
  );
};
export default Router;
