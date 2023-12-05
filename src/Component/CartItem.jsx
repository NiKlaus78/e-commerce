import React from 'react'
import useFetch from './useFetch';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";


const CartItem = ({item, productsObj, key}) => {

  
    const url = `https://fakestoreapi.com/products/${item}`;
    const res =  useFetch(url);
    
    
  return (
    
      <Col className="d-flex" key={key}>
        <Card style={{ width: "24rem", height: "22rem"}}>
        <Card.Header>{res.category}</Card.Header>
          <Card.Body style={{overflow:"auto"}}> 
          <Card.Img style={{ width: "125px"}} variant="top" src={res.image} />           
            <Card.Title>{res.title}</Card.Title>
          </Card.Body>
          <Card.Footer>Unit Price = {res.price}</Card.Footer>
          <Card.Footer>Quantity = {productsObj[item]} Total Price = ${res.price*productsObj[item]} </Card.Footer>
        </Card>
        </Col>
        
  )
}

export default CartItem