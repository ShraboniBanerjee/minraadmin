import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


class Check_in extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
            <h3 className="head">Choose From Old Guests {this.state.hj} </h3>
<p></p>
<Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Select Guests
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">staff</Dropdown.Item>
        <Dropdown.Item href="#/action-2">manager</Dropdown.Item>
        <Dropdown.Item href="#/action-3">admin</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <p></p>

<Form.Label>Stay Starts</Form.Label>
        <Form.Select>
      <option value="1">11/03/22</option>
      <option value="2">4/07/22</option>
      <option value="3">25/10/22</option>
    </Form.Select>
<p></p>
    <Form.Label>Stay Ends</Form.Label>
    <Form.Select>
      <option value="1">15/03/22</option>
      <option value="2">09/07/22</option>
      <option value="3">30/10/22</option>
    </Form.Select>
    
<p></p>
    <Button variant="warning">Details</Button>{' '}
      <Button variant="success">Next</Button>{' '}
<p></p>
      <h3 className="head">Register New Guest {this.state.hj} </h3>
<p></p>

      <Form>
      
      <Form.Group className="mb-3">
        <Form.Label>Guest Name</Form.Label>
        <Form.Control type="text" placeholder="Enter guest name" />
      </Form.Group>
     
      
      <Form.Group className="mb-3">
      <Form.Label>Primary Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter primary number" />
      </Form.Group>
      <Form.Group className="mb-3">
       <Form.Label>Secondary Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter secondary number" />
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

    
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Saved My Information" />
      </Form.Group>
      <Button variant="success" type="submit">
        Add Guest
      </Button>
    </Form>

<p></p>
      </div>
    )
  }
}

export default adminLayout(Check_in);
