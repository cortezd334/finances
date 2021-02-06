import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function DisplayBills() {
    return (
      <Container>
          <Row>
              <Col><h3>Name</h3></Col>
              <Col><h3>Amount</h3></Col>
              <Col><h3>Due</h3></Col>
              <Col><h3>Frequency</h3></Col>
              <Col><h3></h3></Col>
              <Col><h3></h3></Col>
          </Row>
      </Container>
    );
  }
