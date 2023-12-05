import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './items.css';
import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    // <div className="item-container">
    <Row lg={3}>
      {props.data.map((item, index) => (
        <Link to={`/product/${item.id}`} key={index}>
        <Col className="d-flex">
          <Card style={{ width: "24rem", height: "18rem"}}>
          <Card.Header>{item.category}</Card.Header>
            <Card.Body  style={{overflow:"auto"}}> 
            <Card.Img variant="top" src={item.image} />           
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Button variant="primary">{item.price}</Button>
            </Card.Body>
            <Card.Footer>{item.title}</Card.Footer>
          </Card>
          </Col>
          </Link>
      ))}
      </Row>
    //</div>
  );
};

export default Items;
