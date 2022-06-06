import React from "react";
import { Table, Button } from "react-bootstrap";
function CustomTable({ tableTitle, tableData, tableColumns, onDeleteRow }) {
  return (
    <div className="student-table">
      <h3 className="text-align-center">{tableTitle}</h3>
      <Table responsive hover variant="dark">
        <thead>
          <tr>
            {Object.keys(tableColumns).map((colName, index) => (
              <th key={index}>{tableColumns[colName]}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((val, id) => (
            <tr key={id}>
              {Object.keys(tableColumns).map((colName, index) => (
                <td key={index}>{val[colName]}</td>
              ))}
              <td>
                <Button variant="link">Edit</Button>{" "}
                <Button variant="link" onClick={(val) => onDeleteRow(val)}>
                  Delete
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomTable;
