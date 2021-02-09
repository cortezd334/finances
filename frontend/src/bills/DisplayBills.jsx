import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchBills } from '../api'

export default function DisplayBills() {

  
  fetchBills()
  .then(console.log)

  return (
    <Container>
        <Row>
            <Col><h3>Name</h3></Col>
            <Col><h3>Amount</h3></Col>
            <Col><h3>Due</h3></Col>
            <Col><h3>Frequency</h3></Col>
            <Col></Col>
            <Col></Col>
        </Row>
    </Container>
  );
}
