import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { fetchBills } from '../api'

export default function DisplayBills({bill}) {

  function showBills() {
    return bill.map(bill => {
      return <Row key={bill.id}>
        <Col>{bill.name}</Col>
        <Col>{bill.amount}</Col>
        <Col>{bill.due_date}</Col>
        <Col>{bill.frequency}</Col>
        <Col>Edit</Col>
        <Col>Delete</Col>
      </Row>
    })
  }

  //need to update frequency to match following values
    // <option value='0'>Choose...</option>
    // <option value='1'>Daily</option>
    // <option value='2'>Weekly</option>
    // <option value='3'>Monthly</option>
    // <option value='4'>Yearly</option>
  //change edit/delete
  //dollar amounts

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
        {showBills()}
    </Container>
  );
}
