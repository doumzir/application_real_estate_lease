import Header from "./Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import Housing from "../pages/Housing";
import Error from "./Error";
import React, {useState} from "react";
import Footer from "./Footer/Footer";
import About from "../pages/About";
function MyRoutes() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="house/:id" element={<Housing/>}/>
        <Route exact path="/about" element={<About/>}/>
       <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>)
};

export default MyRoutes