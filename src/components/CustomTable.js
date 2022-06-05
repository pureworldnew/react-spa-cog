import React from "react";
import { Table } from "react-bootstrap";
function CustomTable({ tableTitle, tableData, tableColumns }) {
  return (
    <div className="student-table">
      <h3 className="text-align-center">{tableTitle}</h3>
      <Table responsive>
        <thead>
          <tr>
            {Object.keys(tableColumns).map((colName, index) => (
              <th key={index}>{tableColumns[colName]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((val, id) => (
            <tr key={id}>
              {Object.keys(tableColumns).map((colName, index) => (
                <td key={index}>{val[colName]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomTable;
