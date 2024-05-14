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
    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    const response = await fetch(API_URL_SubmitDetails, {
      method: "POST",
      body: formDataObj,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text(); // Get the error message from the server
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
