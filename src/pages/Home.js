import React from "react";
import banner from "../banner.jpg";
import { Container, Table } from "react-bootstrap";
function Home() {
  return (
    <Container>
      <div className="main-wrapper">
        <img alt="banner image" src={banner} style={{ width: "100%" }} />
        <div className="span-centered">
          <span>THE ANNUAL CONFERENCE</span>
          <div className="border-top hr-style mx-auto py-1 my-4"></div>
          <h6>GRAND SPACE, PORTLAND, 21-26 SEPT 2014</h6>
        </div>
      </div>
      <div className="">
        <h3 className="text-align-center">Student Details</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Home;
