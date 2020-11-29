import { get } from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, ListGroup, ListGroupItem, Toast } from "reactstrap";
import Header from "../components/Header";

const Home = ({ data }) => (
  <Container>
    <Header />
    <div className="p-3 bg-success my-2 rounded">
      <Toast>
        <h2 className="text-danger ml-5 pl-5">Home</h2>
      </Toast>
    </div>
    <ListGroup flush>
      <ListGroupItem>
        <div className="row">
          <p className="text-primary my-0 ml-3">ID: {data.id} </p>
          <p className="text-warning my-0 ml-3">UserId: {data.userId}</p>
        </div>
      </ListGroupItem>
      <ListGroupItem>
        <p className="text-success">Title: {data.title}</p>
      </ListGroupItem>
    </ListGroup>
  </Container>
);

Home.getInitialProps = async () => {
  try {
    const { data } = await get("https://jsonplaceholder.typicode.com/todos/1");
    return { data };
  } catch (err) {
    console.log("err", err);
  }
};

export default Home;
