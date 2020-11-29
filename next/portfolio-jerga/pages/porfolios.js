import { get } from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, ListGroup, ListGroupItem, Toast } from "reactstrap";
import Header from "../components/Header";
import { Link } from "../routes";

const Porfolios = ({ data }) => (
  <Container>
    <Header />
    <div className="p-3 bg-primary my-2 rounded">
      <Toast>
        <h2 className="text-danger ml-5 pl-5">Porfolio</h2>
      </Toast>
    </div>
    <h4 className="text-success">Please find post below: </h4>
    {data.map((post, j) => (
      <ListGroup key={j}>
        <ListGroupItem>
          <div className="row">
            <p className="text-primary my-0 ml-3">ID: {post.id} </p>
            <p className="text-warning my-0 ml-3">UserId: {post.userId}</p>
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <Link route={`/porfolio/${post.id}`}>
            <a className="text-success">Title: {post.title}</a>
          </Link>
        </ListGroupItem>
      </ListGroup>
    ))}
  </Container>
);

Porfolios.getInitialProps = async () => {
  try {
    const { data } = await get("https://jsonplaceholder.typicode.com/posts");
    return { data: data.splice(0, 10) };
  } catch (err) {
    console.log("err", err);
  }
};

export default Porfolios;
