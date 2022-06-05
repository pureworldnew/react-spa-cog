import React, { useEffect, useState } from "react";
import axios from "axios";
import banner from "../banner.jpg";
import { Container } from "react-bootstrap";
import CustomTable from "../components/CustomTable";
const tableColumns = {
  id: "#",
  name: "Name",
  dob: "Dob",
  city: "City",
  state: "State",
  zip: "Zip",
};
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get("/getStudents");
      setData(response.data.students);
    };
    fetchData().catch((err) => console.error(err));
  }, []);
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
