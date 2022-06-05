import React, { useEffect } from "react";
import axios from "axios";
import banner from "../banner.jpg";
import { Container } from "react-bootstrap";
import CustomTable from "../components/CustomTable";
function Home() {
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get("/api/notes");
      console.log("response", response);
    };
    fetchData().catch((err) => console.error(err));
  }, []);
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
      <CustomTable tableTitle="Student Details" />
    </Container>
  );
}

export default Home;
