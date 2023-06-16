import Header from "./Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Survey from "../pages/Survey/Survey";
import ClientForm from "./ClientForm";
import FreelanceForm from "./FreelanceForm";
import Error from "./Error";
import React from "react";
function MyRoutes(){
  return(
<Router>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/survey/:questionNumber" element={<Survey />}>
      { /* Nous imbriquons nos composants dans survey */}
      <Route path="client" element={<ClientForm />} />
      <Route path="freelance" element={<FreelanceForm />} />

    </Route>
    <Route path="*" element={<Error />} />
  </Routes>
</Router>)
}
export default MyRoutes