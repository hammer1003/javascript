import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Toast } from "reactstrap";
import Header from "../components/Header";

const Contact = () => (
  <Container>
    <Header />
    <div className="p-3 bg-warning my-2 rounded">
      <Toast>
        <h2 className="text-danger ml-5 pl-5">Contact</h2>
      </Toast>
    </div>
  </Container>
);

export default Contact;
