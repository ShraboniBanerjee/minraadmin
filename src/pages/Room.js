import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

class Room extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
           <h3 className="head">Room Lists{this.state.hj} </h3>
        <p></p>
        <h6>Filter available room with time interval</h6>
        <p></p>
        <Button variant="primary" size="lg" href="/Add_room">
          Add Rooms
        </Button>{' '}

        <p></p>

        <DropdownButton id="dropdown-basic-button" title="Filter" variant="warning">
      <Dropdown.Item href="#/action-1">Room No</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Capacity</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Number of Beds</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Room Type</Dropdown.Item>
      <Dropdown.Item href="#/action-5">Price</Dropdown.Item>
    </DropdownButton>
​
<div className="row">
<div className="col-md-4">
                    <Form.Group controlId="dob">
                      <Form.Label>First Date</Form.Label>
                      <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>
                  </div>

                  <div className="col-md-4">
                    <Form.Group controlId="dob">
                      <Form.Label>Last Date</Form.Label>
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
          <th>Capacity
          <Form.Control
        type="text"
        id="text"
      />
          </th>
          <th>Number of Beds
          <Form.Control
        type="text"
        id="text"
      />
          </th>
          <th>Room Type
          <Form.Control
        type="text"
        id="text"
      />
          </th>
          <th>Price
          <Form.Control
        type="text"
        id="text"
      />
          </th>
          <th>View Info</th>
          <th>Edit Room</th>
          <th>Room Details </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>4</td>
          <td>2</td>
          <td>Deluxe</td>
          <td>$1000</td>
          <td><Button variant="success">View</Button>{' '}</td>
          <td><Button variant="primary">Edit</Button>{' '}</td>
          <td><Button variant="warning">Details</Button>{' '}</td>
        </tr>

        <tr>
        <td>2</td>
          <td>6</td>
          <td>3</td>
          <td>Queen</td>
          <td>$1500</td>
          <td><Button variant="success">View</Button>{' '}</td>
          <td><Button variant="primary">Edit</Button>{' '}</td>
          <td><Button variant="warning">Details</Button>{' '}</td>
     
        </tr>
        <tr>
        <td>3</td>
          <td>2</td>
          <td>1</td>
          <td>King</td>
          <td>$800</td>
          <td><Button variant="success">View</Button>{' '}</td>
          <td><Button variant="primary">Edit</Button>{' '}</td>
          <td><Button variant="warning">Details</Button>{' '}</td>  
        </tr>

        <tr>
        <td>4</td>
          <td>3</td>
          <td>2</td>
          <td>Luxury</td>
          <td>$1100</td>
          <td><Button variant="success">View</Button>{' '}</td>
          <td><Button variant="primary">Edit</Button>{' '}</td>
          <td><Button variant="warning">Details</Button>{' '}</td>
     
        </tr>

      </tbody>
    </Table>

    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>


      </div>
    )
  }
}

export default adminLayout(Room);
