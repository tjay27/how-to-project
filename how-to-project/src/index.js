import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Feeds from "./Pages/Feeds";
import MyActivity from './Pages/MyActivity';
import BlogPost from './Pages/BlogPost';
import SearchPage from './Pages/SearchPage';
import LoginPage from './Pages/LoginPage';
import { AuthContextProvider } from "../src/Firebase/AuthContext";
import Contribute from "./Pages/Contribute";
import AdminPage from "./Pages/AdminPage"
import SearchImage from "./Pages/SearchImage";

// import "../public/index.css";

const USER_TYPES ={
  PUBLIC:"Public user",
  NORMAL_USER:"Normal user",
  ADMIN_USER:"Admin user"
}
const CURRENT_USER_TYPES = USER_TYPES.ADMIN_USER
function Main() {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
        <Routes>
          <Route path="/" element={<PublicElement><Home /></PublicElement>} />
          <Route path="/feed" element={<Feeds />} />
          <Route path="/My-Activity" element={<MyActivity/>} />
          <Route path="/BlogPost" element={<BlogPost />} />
          <Route path="/SearchPage" element={<SearchPage/>} />
          <Route path="/LoginPage" element={<LoginPage/>} />
          <Route path="/Contribute" element={<Contribute/>} />
          <Route path="/article/:id" element={<BlogPost/>} />
          <Route path="/image" element={<SearchImage/>} />

          {/*Protected Route */}
          <Route path="/admin" element={<AdminElement><AdminPage/></AdminElement>} />

          {/**Page not found */}
          <Route path="*" element={<div>Page not found</div>}/>

        </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

function PublicElement({children}){
  return <>
  {children}
  </>
}

function AdminElement({children}){
  if(CURRENT_USER_TYPES === USER_TYPES.ADMIN_USER){
    return <>{children}</>;
  }
  else{
    return <div>YOU DO NOT HAVE ACCESS TO THIS PAGE</div>
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
