import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage from "./pages/Van/VansPage";
import VanDetailPage from "./pages/VanDetail/VanDetailPage";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard/Dashboard";
import Income from "./pages/Host/Inc/Income";
import HostVans from "./pages/Host/Vans/HostVans";
import HostDetailsPage from "./pages/HostDetail/HostDetailsPage";
import Reviews from "./pages/Host/Reviews/Reviews";
import HostVanInfo from "./pages/HostDetail/Content/HostVanInfo";
import HostVanPhotos from "./pages/HostDetail/Content/HostVanPhotos";
import HostVanPrice from "./pages/HostDetail/Content/HostVanPrice";
import SignInPage from "./pages/Login/SignInPage";
import AuthRequired from "./auth/AuthRequired";
import ErrorPage from "./pages/Error/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vans" element={<VansPage />} />
        <Route path="/vans/:id" element={<VanDetailPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route element={<AuthRequired />}>
          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostDetailsPage />}>
              <Route index element={<HostVanInfo />} />
              <Route path="price" element={<HostVanPrice />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
