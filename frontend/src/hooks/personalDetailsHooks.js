import { useState } from "react";

export const usePersonalDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    cnic: "",
    dob: "",
    cnicUpload: null,
    sscObtained: "",
    sscTotal: "",
    ssc_py: "",
    ssc_board: "",
    ssc_rno: "",
    sscUpload: null,
    fscObtained: "",
    fscTotal: "",
    fsc_py: "",
    fsc_board: "",
    fsc_rno: "",
    fscUpload: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  return {
    formData,
    handleInputChange,
    handleFileChange,
  };
};
