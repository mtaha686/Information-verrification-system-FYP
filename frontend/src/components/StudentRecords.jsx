import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPersonalDetails } from "../auth/personalDetailsApi";

const StudentDetailsTable = ({ students }) => {
  return (
    <table className="table table-striped">
      <tbody>
        {students.map((student) => (
          <React.Fragment key={student.id}>
            {/* Existing rows */}
            <tr>
              <th style={{ width: "50%" }}>Name:</th>
              <td style={{ width: "50%" }}>{student.name}</td>
              <th style={{ width: "50%" }}>Father's Name:</th>
              <td style={{ width: "50%" }}>{student.father_name}</td>
              <th style={{ width: "50%" }}>CNIC:</th>
              <td style={{ width: "50%" }}>{student.cnic}</td>
            </tr>

            <tr>
              <th style={{ width: "50%" }}>Date of Birth:</th>
              <td style={{ width: "50%" }}>{student.dob}</td>
              <th style={{ width: "50%" }}>SSC Obtained:</th>
              <td style={{ width: "50%" }}>{student.ssc_obtained}</td>
              <th style={{ width: "50%" }}>SSC Total:</th>
              <td style={{ width: "50%" }}>{student.ssc_total}</td>
            </tr>
            <tr>
              <th style={{ width: "50%" }}>SSC Passing Year:</th>
              <td style={{ width: "50%" }}>{student.ssc_passing_year}</td>
              <th style={{ width: "50%" }}>SSC Board:</th>
              <td style={{ width: "50%" }}>{student.ssc_board}</td>
              <th style={{ width: "50%" }}>SSC Roll No:</th>
              <td style={{ width: "50%" }}>{student.ssc_roll_no}</td>
            </tr>

            <tr>
              <th style={{ width: "50%" }}>FSC Obtained:</th>
              <td style={{ width: "50%" }}>{student.fsc_obtained}</td>
              <th style={{ width: "50%" }}>FSC Total:</th>
              <td style={{ width: "50%" }}>{student.fsc_total}</td>
              <th style={{ width: "50%" }}>FSC Passing Year:</th>
              <td style={{ width: "50%" }}>{student.fsc_passing_year}</td>
            </tr>
            <tr>
              <th style={{ width: "50%" }}>FSC Board:</th>
              <td style={{ width: "50%" }}>{student.fsc_board}</td>
              <th style={{ width: "50%" }}>FSC Roll No:</th>
              <td style={{ width: "50%" }}>{student.fsc_roll_no}</td>
            </tr>
            <tr>
              <th style={{ width: "50%" }}>ID Card:</th>
              <td style={{ width: "50%" }}>
                {student.cnic_upload && (
                  <a
                    href={`http://127.0.0.1:8000${student.cnic_upload}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View CNIC
                  </a>
                )}
              </td>
              <th style={{ width: "50%" }}>FSC MS:</th>
              <td style={{ width: "50%" }}>
                {student.ssc_upload && (
                  <a
                    href={`http://127.0.0.1:8000${student.ssc_upload}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View SSC MarkSheet
                  </a>
                )}
              </td>
              <th style={{ width: "50%" }}>FSC MS:</th>
              <td style={{ width: "50%" }}>
                {student.fsc_upload && (
                  <a
                    href={`http://127.0.0.1:8000${student.fsc_upload}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View FSC MarkSheet
                  </a>
                )}
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

// Use StudentDetailsTable component in your ShowData component
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
      <div
        className="card border-primary mb-3"
        style={{ borderRadius: "15px", backgroundColor: "#f0f0f0" }}
      >
        <div className="card-header bg-primary text-white">
          <h5 className="card-title">Student Details</h5>
        </div>
        <div className="card-body">
          <StudentDetailsTable students={students} />
        </div>
      </div>
    </div>
  );
};

export default ShowData;
