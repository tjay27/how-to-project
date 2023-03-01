import React, { useState } from "react";
import AdminCard from "./AdminCard";
import StatsAdmin from "./StatsAdmin"
import Blogs from "../Blogs";
import NavBar from "../NavBar";
import PopUp from "../Elements/PopUp";
import Fab from "@mui/material/Fab";
import Login from "../Images/Login.png";
import { Box, TextField } from "@mui/material";
import Logo from "../Images/Logo.png";
import LoginIcon from "../Elements/login";
import Navbar from "../Elements/Navbar";



function AdminPage() {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
    <Navbar/>
      {/* <NavBar /> */}
      <div>
        <input
          class="search-bar"
          type="search"
          placeholder="Search"
          id="searchInput"
        ></input>
        <i class="fas fa-search search-icon"></i>
      </div>

      
      <div class="adminText">
        <h1>ADMIN PAGE</h1>
      </div>

      
      <StatsAdmin/>
      
      <AdminCard/>
    </>
  );
}

export default AdminPage;
