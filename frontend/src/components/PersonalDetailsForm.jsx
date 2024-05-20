import React, { useState } from "react";
import "../assets/CSS/styles.css";
import { usePersonalDetailsForm } from "../hooks/personalDetailsHooks";
import {
  verifyPersonalDetails,
  submitPersonalDetails,
} from "../auth/personalDetailsApi";
import InputField from "../components/InputField";
import FileUploadField from "../components/FileUploadField";
import SelectField from "../components/SelectField"; // Import the new component
import { BoardsOptions, YearList } from "./data";
import SubmitButton from "./button";
import StudentTable from "./PersonalDetailsTable";

function PersonalDetailForm() {
  const { formData, handleInputChange, handleFileChange } =
    usePersonalDetailsForm();
  const [compData, setCompData] = useState(null);
  const [submitData, setSubmitData] = useState(null);

  const isVerified =
    compData && compData.card_data && compData.ssc_data && compData.fsc_data;

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const newCompData = await verifyPersonalDetails(formData);
      setCompData(newCompData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submittedData = await submitPersonalDetails(formData);
      setSubmitData(submittedData);
      console.log("Submitted Data:", submittedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main-form-container">
      <form
        className="form-container"
        onSubmit={isVerified ? handleSubmit : handleVerify}
      >
        <InputField
          data={compData && compData.card_data.name}
          label="Name"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <InputField
          data={compData && compData.card_data.fname}
          label="Father's Name"
          type="text"
          id="fatherName"
          name="fatherName"
          placeholder="Enter father's name"
          value={formData.fatherName}
          onChange={handleInputChange}
          required
        />
        <InputField
          data={compData && compData.card_data.cnic_number}
          label="CNIC"
          type="text"
          id="cnic"
          name="cnic"
          placeholder="Enter CNIC"
          pattern="\d{5}-\d{7}-\d{1}"
          value={formData.cnic}
          onChange={handleInputChange}
          required
        />

        <InputField
          data={compData && compData.card_data.dob}
          label="Date of Birth"
          type="date"
          id="dob"
          name="dob"
          placeholder="Select your date of birth"
          value={formData.dob}
          onChange={handleInputChange}
          required
        />

        <FileUploadField
          label="CNIC image"
          id="cnicUpload"
          name="cnicUpload"
          onChange={handleFileChange}
        />

        {/* matric part */}
        <InputField
          data={compData && compData.ssc_data.obtained}
          label="Obtained Marks (SSC)"
          type="text"
          id="sscObtained"
          name="sscObtained"
          placeholder="Enter obtained marks (SSC)"
          value={formData.sscObtained}
          onChange={handleInputChange}
          pattern="^(?:\d{3,4}|1100)$"
          required
        />
        <InputField
          data={compData && compData.ssc_data.total}
          label="Total Marks (SSC)"
          type="text"
          id="sscTotal"
          name="sscTotal"
          pattern="^(?:\d{3,4}|1100)$"
          placeholder="Enter Total Marks (SSC)"
          value={formData.sscTotal}
          onChange={handleInputChange}
          required
        />

        <SelectField
          data={compData && compData.ssc_data.year}
          label="Passing Year"
          id="ssc_py"
          name="ssc_py"
          value={formData.ssc_py}
          onChange={handleInputChange}
          options={YearList} // Make sure genderOptions is defined and not null
          required
        />
        <SelectField
          data={compData && compData.ssc_data.total} //change it later
          label="Borad (SSC)"
          id="ssc_board"
          name="ssc_board"
          value={formData.ssc_board}
          onChange={handleInputChange}
          options={BoardsOptions} // Make sure genderOptions is defined and not null
          required
        />
        <InputField
          data={compData && compData.ssc_data.roll_no}
          label="Roll No (SSC)"
          type="text"
          id="ssc_rno"
          name="ssc_rno"
          placeholder="Enter Roll no (SSC)"
          value={formData.ssc_rno}
          onChange={handleInputChange}
          pattern="^\d{6}$"
          required
        />
        <FileUploadField
          label="MarkSheet (SSC)"
          id="sscUpload"
          name="sscUpload"
          accept=".JPEG, .PNG, .JPG"
          onChange={handleFileChange}
        />
        <InputField
          data={compData && compData.fsc_data.obtained}
          label="Obtained Marks (FSC)"
          type="text"
          id="fscObtained"
          name="fscObtained"
          placeholder="Enter obtained marks (FSC)"
          pattern="^(?:\d{3,4}|1100)$"
          value={formData.fscObtained}
          onChange={handleInputChange}
          required
        />
        <InputField
          data={compData && compData.fsc_data.total}
          label="Total Marks (FSC)"
          type="text"
          id="fscTotal"
          name="fscTotal"
          placeholder="Enter Total Marks (FSC)"
          pattern="^(?:\d{3,4}|1100)$"
          value={formData.fscTotal}
          onChange={handleInputChange}
          required
        />
        <SelectField
          data={compData && compData.fsc_data.year}
          label="Passing Year (FSC)"
          id="fsc_py"
          name="fsc_py"
          value={formData.fsc_py}
          onChange={handleInputChange}
          options={YearList} // Assuming you have a list of years for options
          required
        />
        <SelectField
          data={compData && compData.fsc_data.total} // change it later
          label="Board (FSC)"
          id="fsc_board"
          name="fsc_board"
          value={formData.fsc_board}
          onChange={handleInputChange}
          options={BoardsOptions} // Assuming you have a list of boards for options
          required
        />
        <InputField
          data={compData && compData.fsc_data.roll_no}
          label="Roll No (FSC)"
          type="text"
          id="fsc_rno"
          name="fsc_rno"
          placeholder="Enter Roll no (FSC)"
          pattern="^\d{6}$"
          value={formData.fsc_rno}
          onChange={handleInputChange}
          required
        />
        <FileUploadField
          label="MarkSheet (FSC)"
          id="fscUpload"
          name="fscUpload"
          onChange={handleFileChange}
        />
        <SubmitButton
          isVerified={isVerified}
          onClick={isVerified ? handleSubmit : handleVerify}
        />
      </form>
      {/* <hr /> */}
      {/* <p>{submitData}</p> */}
      {/* {submitData && <StudentTable data={submitData} />} */}
    </div>
  );
}

export default PersonalDetailForm;
