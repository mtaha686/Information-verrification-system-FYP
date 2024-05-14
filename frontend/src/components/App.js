import React from "react";
import NavBar from "./NaveBar";
import Footer from "./Footer";
import PersonalDetailForm from "./PersonalDetailsForm";
import ShowData from "./StudentRecords";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Routes>
        <Route path="/records" element={<ShowData />} />
        <Route path="/application" element={<PersonalDetailForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
