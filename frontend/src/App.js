import React from "react";
import NavBar from "../src/components/common/NaveBar";
import Footer from "../src/components/common/Footer";
import PersonalDetailForm from "../src/components/PersonalDetailsForm";
import ShowData from "../src/components/StudentRecords";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Routes>
        <Route path="/" element={<PersonalDetailForm />} />
        <Route path="/records" element={<ShowData />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
