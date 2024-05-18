import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPersonalDetails } from "../auth/personalDetailsApi";
import "../assets/CSS/styles.css";

const StudentDetailsCard = ({ student }) => {
  return (
    <div className="card-body align-items-center justify-content-center">
      <div className="row"></div>
      <div className="row">
        <div className="col-md-4 mb-2">
          <label className="sec2-lable">Father's Name</label>
          <p className="sec2-data text-blue fw-bold">{student.father_name}</p>
        </div>
        <div className="col-md-4 mb-2">
          <label className="sec2-lable">CNIC</label>
          <p className="sec2-data text-blue fw-bold">{student.cnic}</p>
        </div>
        <div className="col-md-4 mb-2">
          <label className="sec2-lable">DOB</label>
          <p className="sec2-data text-blue fw-bold">{student.dob}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-2">
          <label className="sec2-lable">SSC Obtained</label>
          <p className="sec2-data text-blue fw-bold">{student.ssc_obtained}</p>
        </div>
        <div className="col-md-4 mb-2">
          <label className="sec2-lable">SSC Total</label>
          <p className="sec2-data text-blue fw-bold">{student.ssc_total}</p>
        </div>
        <div className="col-md-4 mb-2">
          <label className="sec2-lable">SSC Passing Year</label>
          <p className="sec2-data text-blue fw-bold">
            {student.ssc_passing_year}
          </p>
        </div>
        <div className="col-md-4 mb-2">
          <label className="sec2-lable">SSC Roll no</label>
          <p className="sec2-data text-blue fw-bold">{student.ssc_roll_no}</p>
        </div>
        <div className="col-md-8 mb-2">
          <label className="sec2-lable">SSC Board</label>
          <p className="sec2-data text-blue fw-bold">{student.ssc_board}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-2">
          <label className="sec2-lable">FSC Obtained</label>
          <p className="sec2-data text-blue fw-bold">{student.fsc_obtained}</p>
        </div>
        <div className="col-md-4 mb-2">
          <label className="sec2-lable">FSC Total</label>
          <p className="sec2-data text-blue fw-bold">{student.fsc_total}</p>
        </div>
        <div className="col-md-4 mb-2">
          <label className="sec2-lable">FSC Passing Year</label>
          <p className="sec2-data text-blue fw-bold">
            {student.fsc_passing_year}
          </p>
        </div>
        <div className="col-md-4 mb-2">
          <label className="sec2-lable">FSC Roll No</label>
          <p className="sec2-data text-blue fw-bold">{student.fsc_roll_no}</p>
        </div>
        <div className="col-md-8 mb-2">
          <label className="sec2-lable">FSC Board</label>
          <p className="sec2-data text-blue fw-bold">{student.fsc_board}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-2">
          <label className="sec2-lable">CNIC Upload</label>
          <p className="sec2-data  fw-bold" style={{ color: "#9757f8" }}>
            {student.cnic_upload && (
              <a
                href={`http://127.0.0.1:8000${student.cnic_upload}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View CNIC Image
              </a>
            )}
          </p>
        </div>
        <div className="col-md-4 mb-2">
          <label className="sec2-lable">SSC Upload</label>
          <p className="sec2-data text-blue fw-bold">
            {student.ssc_upload && (
              <a
                href={`http://127.0.0.1:8000${student.ssc_upload}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View SSC Marksheet
              </a>
            )}
          </p>
        </div>
        <div className="col-md-4 mb-2">
          <label className="sec2-lable">FSC Upload</label>
          <p className="sec2-data  fw-bold">
            {student.fsc_upload && (
              <a
                href={`http://127.0.0.1:8000${student.fsc_upload}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View FSC Marksheet
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const ShowData = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPersonalDetails();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      {students.map((student) => (
        <div
          className="card  mb-3"
          style={{ borderRadius: "15px" }}
          key={student.id}
        >
          <div
            className="card-header text-white"
            style={{ backgroundColor: "#9757f8" }}
          >
            <h5 className="card-title">{student.name}</h5>
          </div>
          <StudentDetailsCard student={student} />
        </div>
      ))}
    </div>
  );
};

export default ShowData;
