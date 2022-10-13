import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

class Bookings extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
       <h3 className="head">Bookings List{this.state.hj} </h3>
        <p></p>

        <p></p>

        
<Table striped bordered hover>
      <thead>
        <tr>
          <th>Room Number
          <Form.Control
        type="text"
        id="text"
      />
          </th>
          <th>Guest Name
          <Form.Control
        type="text"
        id="text"
      />
          </th>
          <th>Date Of Reservation
          <Form.Group controlId="dob">
                      <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>
          </th>
          <th>Start Day
          <Form.Group controlId="dob">
                      <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>
          </th>
          <th>End Day
          <Form.Group controlId="dob">
                      <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>
          </th>
          <th>Number of Dependees
          <Form.Control
        type="text"
        id="text"
      />
          </th>
          <th>Room Rent
          <Form.Control
        type="text"
        id="text"
      />
          </th>
          <th>Total Amount
          <Form.Control
        type="text"
        id="text"
      />
          </th>
          <th><Button variant="warning">Filter</Button></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>302</td>
          <td>Joe Root</td>
          <td>
       8.09.22
          </td>
          <td>
       12.11.22
          </td>
          <td>
     22.11.22
          </td>
          <td>3</td>
          <td>4080.0</td>
          <td>4367.0</td>
          <td><Button variant="danger">Delete</Button>{' '}</td>
        </tr>
      </tbody>
    </Table>
  
      </div>
    )
  }
}

export default adminLayout(Bookings);
