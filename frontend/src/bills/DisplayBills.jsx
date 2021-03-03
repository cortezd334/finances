import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import edit from '../images/settings.png';
// import { fetchBills } from '../api'

export default function DisplayBills({bill}) {

  function showBills() {

    return bill.map(bill => {

      function renderFrequency(frequency) {
        switch (frequency) {
          case 1:
            return 'Daily';
          case 2:
            return 'Weekly';
          case 3:
            return 'Monthly';
          case 4:
            return 'Yearly';
        };
      };

      return <Row key={bill.id}>
        <Col>{bill.name}</Col>
        <Col>{bill.amount}</Col>
        <Col>{bill.due_date}</Col>
        <Col>{renderFrequency(bill.frequency)}</Col>
        <Col><img className='editImg' src={edit}/></Col>
        <Col>Delete</Col>
      </Row>
    })
  }
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
