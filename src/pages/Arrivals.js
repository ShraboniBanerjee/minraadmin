import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

class Arrivals extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
           <h3 className="head">Arrivals On{this.state.hj} </h3>
        <p></p>

        <p></p>

        <DropdownButton id="dropdown-basic-button" title="Filter">
      <Dropdown.Item href="#/action-1">Room No</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Gueest Name</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Date Of Reservation</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Start Day</Dropdown.Item>
      <Dropdown.Item href="#/action-5">End Day</Dropdown.Item>
    </DropdownButton>
​
<div className="row">
<div className="col-md-4">
                    <Form.Group controlId="dob">
                      <Form.Label>Arrival Date</Form.Label>
                      <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>
                  </div>
              </div>
              <p></p>
              <Button variant="primary">Search</Button>{' '}
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
          <td>102</td>
          <td>Alex</td>
          <td>
         22.09.22
          </td>
          <td>
     23.10.22
          </td>
          <td>
         11.11.22
          </td>
          <td>3</td>
          <td>$1500</td>
          <td><Button variant="primary">Edit</Button>{' '}</td>
        </tr>
      </tbody>
    </Table>
      </div>
    )
  }
}

export default adminLayout(Arrivals);
