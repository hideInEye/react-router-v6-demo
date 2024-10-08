import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/layout/layout";
import Home from "@/pages/home";
import Dish from "@/pages/dish/manager";
function Myrouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="dish/manager" element={<Dish />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Myrouter;
