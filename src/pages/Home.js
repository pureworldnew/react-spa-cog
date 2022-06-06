import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CustomTable from "../components/CustomTable";
import useFetch from "../hooks/useFetch";
import banner from "../banner.jpg";
import { tableColumns } from "../constants";
import ConfirmModal from "../components/ConfirmModal";

function Home() {
  const [modalShow, setModalShow] = useState(false);

  let data = useFetch("/getStudents", []);

  console.log("dATA", data);
  const onDeleteRow = (delRow) => {
    setModalShow(true);
  };
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
        onDeleteRow={onDeleteRow}
      />
      <div className="student-add">
        <Button variant="primary">Add New Student</Button>
      </div>
      <ConfirmModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}

export default Home;
