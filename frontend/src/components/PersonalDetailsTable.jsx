import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const renderTableRows = (rowData) => {
  return Object.entries(rowData).map(([label, value]) => (
    <tr key={label}>
      <td>{label}:</td>
      <td style={{ color: value ? "green" : "red" }}>
        {value ? `${label} matches` : ` ${label} doesn't match`}
      </td>
    </tr>
  ));
};

const StudentTable = ({ data }) => {
  // Check if "data" is null or undefined before rendering the table
  if (!data) {
    return null;
  }

  return (
    <div className="container">
      <h1 className="text-center mb-4">Student Information</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h2>Card Data</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <tbody>{renderTableRows(data.card_data)}</tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h2>SSC Data</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <tbody>{renderTableRows(data.ssc_data)}</tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-info text-white">
              <h2>FSC Data</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <tbody>{renderTableRows(data.fsc_data)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
