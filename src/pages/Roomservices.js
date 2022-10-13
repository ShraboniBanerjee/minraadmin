import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

class Roomservices extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
       <h3 className="head">Room Services{this.state.hj} </h3>
        <p></p>
        <h6>This list include last 1 month room services</h6>
        <p></p>
        <Button variant="warning">Print</Button>
        <p></p>

               
<Table striped bordered hover>
      <thead>
        <tr>
          <th>Guest Name
          <Form.Control
        type="text"
        id="text"
      />
          </th>

          <th>Room Number
          <Form.Control
        type="text"
        id="text"
      />
          </th>

          <th>Type
          <Form.Control
        type="text"
        id="text"
      />
          </th>

          <th>Created Date
          <Form.Group controlId="dob">
                      <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>
          </th>
          <th>Price
          <Form.Control
        type="text"
        id="text"
      />
          </th>

          <th>Assigned Person
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
        <td>Joe Root</td>
          <td>302</td>
          <td>Cleaning</td>
          <td>
         22.11.22
          </td>
          <td>66.0</td>
          <td>Katha</td>
          <td><Button variant="danger">Delete</Button>{' '}</td>
        </tr>

        <tr>
        <td>Alex Hail</td>
          <td>202</td>
          <td>Technical</td>
          <td>
         22.11.22
          </td>
          <td>78.0</td>
          <td>Rahul</td>
          <td><Button variant="danger">Delete</Button>{' '}</td>
        </tr>

        <tr>
        <td>Gill Robert</td>
          <td>105</td>
          <td>Cleaning</td>
          <td>
         22.11.22
          </td>
          <td>66.0</td>
          <td>Katha</td>
          <td><Button variant="danger">Delete</Button>{' '}</td>
        </tr>

      </tbody>
    </Table>

      </div>
    )
  }
}

export default adminLayout(Roomservices);
