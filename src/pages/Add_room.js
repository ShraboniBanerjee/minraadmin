import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class Add_room extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        <h2>Enter Details</h2>
        <p></p>

        <Form>
          <Row>
            <Col>
      <Form.Group className="mb-3">
        <Form.Label>Room No</Form.Label>
        <Form.Control type="text" placeholder="Enter Room No" />
      </Form.Group>
</Col>
<Col>
      <Form.Group className="mb-3">
        <Form.Label>Capacity</Form.Label>
        <Form.Control type="text" placeholder="Capacity" />
      </Form.Group>
      </Col>
      </Row>

<Row>
  <Col>
  
  <Form.Group className="mb-3">
        <Form.Label>Floor No</Form.Label>
        <Form.Select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
        </Form.Group>
  </Col>

  <Col>
  <Form.Group className="mb-3">
        <Form.Label>Room Type</Form.Label>
        <Form.Control type="text" placeholder="Room Type" />
      </Form.Group>
  </Col>
</Row>


<Row>
  <Col>
  <Form.Group className="mb-3">
        <Form.Label>Number of Beds</Form.Label>
        <Form.Control type="text" placeholder="No of Beds" />
      </Form.Group>
  </Col>

  <Col>
  <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" />
      </Form.Group>
  </Col>
</Row>

<Button variant="success">Add Room</Button>{' '}
      <Button variant="danger">Cancel</Button>{' '}
    </Form>

    <p></p>

      </div>
    )
  }
}

export default adminLayout(Add_room);
