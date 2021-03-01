import React, { useState } from 'react';
import AddBill from './AddBill';
import DisplayBills from './DisplayBills';
import Button from 'react-bootstrap/Button'

export default function Bills({bill, setBill}) {

  const [newBill, setNewBill] = useState(false);

  function toggleClick() {
    setNewBill(!newBill)
    //allows for toggle of AddBill
  }
  return (
      <div>
      <Button onClick={toggleClick}>Add Bill</Button>
      {/* possible drop down option */}
      {newBill === true ? <AddBill/> : null}
      <DisplayBills bill={bill}/>
    </div>
  );
}
