import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ACServices from "@/pages/ACServices";
import WaterTanker from "@/pages/WaterTanker";
import GeyserHeater from "@/pages/GeyserHeater";
import Contact from "@/pages/Contact";

// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ac-services" element={<ACServices />} />
      <Route path="/water-tanker-noida" element={<WaterTanker />} />
      <Route path="/geyser-heater-repair" element={<GeyserHeater />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
