import React from 'react';
import products from '../products';
import { Row, Col } from 'react-bootstrap';

const Homescreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>{products.map((product) => {})}</Row>
    </>
  );
};

export default Homescreen;
