import { get } from "axios";
import { withRouter } from "next/router";
import React from "react";
import { Container, ListGroup, ListGroupItem, Toast } from "reactstrap";
import Header from "../components/Header";

const Porfolio = withRouter(props => (
  <Container>
    <Header />
    <div className="p-3 bg-primary my-2 rounded">
      <Toast>
        <h2 className="text-danger ml-5">Specific Porfolio</h2>
      </Toast>
    </div>
    <ListGroup flush>
      <ListGroupItem>
        <div className="row">
          <p className="text-primary my-0 ml-3">ID: {props.data.id} </p>
          <p className="text-warning my-0 ml-3">UserId: {props.data.userId}</p>
        </div>
      </ListGroupItem>
      <ListGroupItem>
        <p className="text-success">Title: {props.data.title}</p>
      </ListGroupItem>
    </ListGroup>
  </Container>
));

Porfolio.getInitialProps = async ({ query }) => {
  try {
    const { data } = await get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    return { data };
  } catch (err) {
    console.log("err", err);
  }
};

export default Porfolio;
