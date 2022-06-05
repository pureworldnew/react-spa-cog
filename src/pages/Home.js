import React from "react";
import { Container } from "react-bootstrap";
import CustomTable from "../components/CustomTable";
import useFetch from "../hooks/useFetch";
import banner from "../banner.jpg";
import { tableColumns } from "../constants";

function Home() {
  let data = useFetch("/getStudents", []);
  console.log("dATA", data);
  return (
    <Container>
      <div className="main-wrapper">
        <img alt="" src={banner} style={{ width: "100%" }} />
        <div className="span-centered">
          <span>THE ANNUAL CONFERENCE</span>
          <div className="border-top hr-style mx-auto py-1 my-4"></div>
          <h6>GRAND SPACE, PORTLAND, 21-26 SEPT 2014</h6>
        </div>
      </div>
      <CustomTable
        tableTitle="Student Details"
        tableData={data}
        tableColumns={tableColumns}
      />
    </Container>
  );
}

export default Home;
