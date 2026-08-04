import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import WaterQuality from "./pages/WaterQuality";
import Tender from "./pages/Tender";
import Contact from "./pages/Contact";
import AquaCure from "./pages/AquaCure";
import Biological from "./pages/Biological";
import AgroCure from "./pages/AgroCure";
import CMS from "./pages/CMS";
import AutoFiller from "./pages/AutoFiller";
import MicroMeter from "./pages/MicroMeter";
import SmartCarParking from "./pages/SmartCarParking";
import MarkIt from "./pages/MarkIt";
import HVDS from "./pages/HVDS";
import SinglePhaseSmartMeter from "./pages/SinglePhaseSmartMeter";
import ThreePhaseSmartMeter from "./pages/ThreePhaseSmartMeter";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import BecomePartner from "./pages/BecomePartner";
import Services from "./pages/Services";
import ElectroCure from "./pages/ElectroCure";
import WhistleblowerForm from "./pages/WhistleblowerForm";
import WhistleblowerPolicy from "./pages/WhistleblowerPolicy";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/waterquality" element={<WaterQuality />} />
      <Route path="/tender" element={<Tender />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/aquacure" element={<AquaCure />} />
      <Route path="/biological" element={<Biological />} />
      <Route path="/agrocure" element={<AgroCure />} />
      <Route path="/cms" element={<CMS />} />
      <Route path="/autofiller" element={<AutoFiller />} />
      <Route path="/micrometer" element={<MicroMeter />} />
      <Route path="/smartcarparking" element={<SmartCarParking />} />
      <Route path="/markit" element={<MarkIt />} />
      <Route path="/hvds" element={<HVDS />} />
      <Route path="/singlephasesmartmeters" element={<SinglePhaseSmartMeter />} />
      <Route path="/threephasesmartmeters" element={<ThreePhaseSmartMeter />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/become-partner" element={<BecomePartner />} />
      <Route path="/services" element={<Services />} />
      <Route path="/electrocure" element={<ElectroCure />} />
      <Route path="/whistleblower-form" element={<WhistleblowerForm />} />
<Route path="/whistleblower-policy" element={<WhistleblowerPolicy />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;