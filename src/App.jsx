import React from "react";
// import Footer from "./pages/Footer/Footer";
// import AddNote from "./pages/AddNote";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Donasi from "./pages/Donasi/Donasi";
import Petisi from "./pages/Petisi/Petisi";
import PetisiTerkait from "./pages/Petisi/PetisiTerkait";
import DetailPetisi from "./pages/Petisi/DetailPetisi";
// import FormPetisi from "./pages/Petisi/FormPetisi";
// import Search from "./pages/Searchpage/Search";
import "./App.css";
import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom";
import { getAccessToken } from "./utils/network";
import DetailPetisiAdmin from "./pages/Admin/PetisiAdmin/DetailPetisiAdmin";
// import Profile from "./pages/Profile";
// import InfografisAdmin from "./pages/Admin/InfografisAdmin/InfografisAdmin";
// import AddInfografisAdmin from "./pages/Admin/InfografisAdmin/AddInfografisAdmin";
// import UpdateInfografisAdmin from "./pages/Admin/InfografisAdmin/UpdateInfografisAdmin";

function NeedLogin() {
  let auth = getAccessToken();
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
}

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Footer />} /> */}
        {/* <Route path="/" element={<Donasi />} /> */}
        <Route path="/" element={<Petisi />} />
        <Route path="/petisi/terkait/:hashtag" element={<PetisiTerkait />} />
        <Route path="/detailpetisi" element={<DetailPetisi />} />
        <Route path="/admin/aksi/:key" element={<DetailPetisiAdmin />} />
        {/* <Route path="/form" element={<FormPetisi />} /> */}
        {/* <Route path="/search" element={<Search />} /> */}
        {/* <Route path="/register" element={<Register />} />
        <Route element={<NeedLogin />}>
         <Route path="/admin/infografis" element={<InfografisAdmin />} />
        <Route
          path="/admin/infografis/add-infografis"
          element={<AddInfografisAdmin />}
        />
        <Route
          path="/admin/infografis/update-infografis"
          element={<UpdateInfografisAdmin />}
          <Route path="/:username" element={<Home />} />
          <Route path="/:username/add" element={<AddNote />} />
          <Route path="/:username/profile" element={<Profile />} /> */}
      </Routes>
    </div>
  );
}

export default App;
