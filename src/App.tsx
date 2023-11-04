import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Van/Vans";
import VanDetail from "./pages/VanDetail/VanDetail";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard/Dashboard";
import Income from "./pages/Host/Inc/Income";
import HostVans from "./pages/Host/Vans/HostVans";
import HostDetails from "./pages/HostDetail/HostDetails";
import Reviews from "./pages/Host/Reviews/Reviews";
import HostVanInfo from "./pages/HostDetail/Content/HostVanInfo";
import HostVanPhotos from "./pages/HostDetail/Content/HostVanPhotos";
import HostVanPrice from "./pages/HostDetail/Content/HostVanPrice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Vans Route */}
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
        {/* Host Route */}
        <Route path="/host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostDetails />}>
            <Route index element={<HostVanInfo />} />
            <Route path="price" element={<HostVanPrice />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
