const BASE_URL = "http://127.0.0.1:8000/";

// Use the base URL for endpoints
export const API_URL_Verification = `${BASE_URL}verify_personal_detail/`;
export const API_URL_SubmitDetails = `${BASE_URL}submit_personal_detail/`;
export const API_URL_GetDetails = `${BASE_URL}get_personal_details/`;

export const verifyPersonalDetails = async (formData) => {
  try {
    const formDataObj = new FormData();
    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    const response = await fetch(API_URL_Verification, {
      method: "POST",
      body: formDataObj,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const submitPersonalDetails = async (formData) => {
  try {
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("father_name", formData.fatherName);
    formDataObj.append("cnic", formData.cnic);
    formDataObj.append("dob", formData.dob);
    formDataObj.append("cnic_upload", formData.cnicUpload);
    formDataObj.append("ssc_obtained", formData.sscObtained);
    formDataObj.append("ssc_total", formData.sscTotal);
    formDataObj.append("ssc_passing_year", formData.ssc_py);
    formDataObj.append("ssc_board", formData.ssc_board.substring(0, 500)); // Ensure max 50 characters
    formDataObj.append("ssc_roll_no", formData.ssc_rno);
    formDataObj.append("ssc_upload", formData.sscUpload);
    formDataObj.append("fsc_obtained", formData.fscObtained);
    formDataObj.append("fsc_total", formData.fscTotal);
    formDataObj.append("fsc_passing_year", formData.fsc_py);
    formDataObj.append("fsc_board", formData.fsc_board.substring(0, 500)); // Ensure max 50 characters
    formDataObj.append("fsc_roll_no", formData.fsc_rno);
    formDataObj.append("fsc_upload", formData.fscUpload);

    const response = await fetch(API_URL_SubmitDetails, {
      method: "POST",
      body: formDataObj,
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(
        `HTTP error! Status: ${response.status}, Message: ${errorMessage}`
      );
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const getPersonalDetails = async () => {
  try {
    const response = await fetch(API_URL_GetDetails, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
