import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import {addBill} from '../api'

export default function AddBill() {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('hi')
    console.log(e)
    // addBill()
  }

  return (
    <div>
      <Form className='form shadow'>
        <Form.Row>
          <Form.Group as={Col} xs="auto">
            <Form.Label> Bill Name</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} xs="auto">
            <Form.Label>Due Date</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option value='0'>Choose...</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='14'>14</option>
              <option value='15'>15</option>
              <option value='16'>16</option>
              <option value='17'>17</option>
              <option value='18'>18</option>
              <option value='19'>19</option>
              <option value='20'>20</option>
              <option value='21'>21</option>
              <option value='22'>22</option>
              <option value='23'>23</option>
              <option value='24'>24</option>
              <option value='25'>25</option>
              <option value='26'>26</option>
              <option value='27'>27</option>
              <option value='28'>28</option>
              <option value='29'>29</option>
              <option value='30'>30</option>
              <option value='31'>31</option>
            </Form.Control>
            {/* change to calendar */}
          </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} xs="auto">
            <Form.Label>Amount</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} xs="auto">
            <Form.Label>Frequency</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option value='0'>Choose...</option>
              <option value='1'>Daily</option>
              <option value='2'>Weekly</option>
              <option value='3'>Monthly</option>
              <option value='4'>Yearly</option>
              {/* make sure to add more options later */}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Col xs="auto">
              <Button onSubmit={handleSubmit} type="submit">Submit</Button>
            </Col>
        </Form.Row>
      </Form>
    </div>
  );
}
