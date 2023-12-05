import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { increment, products, totalPrice } from '../actions/cart';
import NavbarProduct from './NavbarProduct';

const ProductItem = () => {

    const { id } = useParams();
    const url = `https://fakestoreapi.com/products/${id}`;
    const res =  useFetch(url);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)
    console.log(res.rating);

    const handleCart = () =>{
        dispatch(increment(cart));
        dispatch(products(id));
        dispatch(totalPrice(res.price));
    }

    


  return (
<>
<NavbarProduct isSearch={false}/>
    <div className="text-center" style={{marginTop:"20px"}}>

        <h2 className=".font-weight-bolder">{res.title}</h2>

        <Image src={res.image} style={{width:"20rem", height:"25rem"}} roundedCircle />;
        <Container>
            <Row>
                <h2>{res.category}</h2>
            </Row>
            <Row>
                <Col>{res.description}</Col>
                <Col>{res?.rating?.rate ? res.rating.rate : ""}</Col>
                <Col>{res?.rating?.count ? res.rating.count : ""}</Col>
            </Row>
            <Row>
                <Col>{res.price}</Col>
            </Row>
        </Container>

        <Stack gap={2} className="col-md-5 mx-auto">
            <Button variant="secondary" onClick={handleCart}>Save/Add to Cart</Button>
            <Button variant="outline-secondary">Cancel</Button>
        </Stack>
    </div>
    </>
  )
}

export default ProductItem