import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


 class Employe extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }
  render() {
    return (
      <div>
                <h3 className="head">Employee Page {this.state.hj} </h3>

<p></p>


 <Popup trigger={<Button variant="primary">Add New Employee</Button>
} >
    <div style={{backgroundColor: "smokewhite", color: "black"}}>
    <Form>
      <Row>
        <Col>
        <Form.Label style={{color: "black"}}>User ID</Form.Label>
          <Form.Control placeholder="User ID" />
        </Col>
        <Col>
        <Form.Label style={{color: "black"}}>Mobile</Form.Label>
          <Form.Control placeholder="Phn No" />
        </Col>
      </Row>

      <Row>
        <Col>
        <Form.Label style={{color: "black"}}>Name</Form.Label>
          <Form.Control placeholder="Name" />
        </Col>
        <Col>
        <Form.Label style={{color: "black"}}>Salary</Form.Label>
          <Form.Control placeholder="Salary" />
        </Col>
      </Row>

      <Row>
        <Col>
        <Form.Label style={{color: "black"}}>Email</Form.Label>
          <Form.Control type="Email" placeholder="Email" />
        </Col>
        <Col>
        <Form.Label style={{color: "black"}}>Password</Form.Label>
          <Form.Control type="password" placeholder="******" />
        </Col>
      </Row>

       <Form.Group className="xs" controlId="formBasicPassword">
        <Form.Label style={{color: "black"}}>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Saved my info" />
      </Form.Group>
<Col>
      <Form.Check type="radio" label="Manager" />
      <Form.Check type="radio" label="Receptionist" />
      <Form.Check type="radio" label="Staff" />
</Col>

      <Button variant="success" type="submit">
        Submit
      </Button>
      <Button variant="danger" type="submit">
        Cancel
      </Button>
</Form>

    

    </div>
  </Popup>

 <h3>

 </h3>
<Table striped bordered hover>
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Phone Number</th>
    <th>Role</th>
    <th><Button variant="warning">Filter</Button>{' '}</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto@gmail.com</td>
    <td>9876543212</td>
    <td>Manager</td>
    <td>  <Button variant="info">Detail</Button>{' '}</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jacob</td>
    <td>jacto@gmail.com</td>
    <td>9854321243</td>
    <td>Admin</td>
    <td>  <Button variant="info">Detail</Button>{' '}</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Larry</td>
    <td>larry@gmail.com</td>
    <td>6543212765</td>
    <td>Staff</td>
    <td>  <Button variant="info">Detail</Button>{' '}</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Ellonite</td>
    <td>ellonnite@gmail.com</td>
    <td>22234212765</td>
    <td>Receptionist</td>
    <td>  <Button variant="info">Detail</Button>{' '}</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Fabiola</td>
    <td>fab@gmail.com</td>
    <td>32432127652</td>
    <td>Employee</td>
    <td>  <Button variant="info">Detail</Button>{' '}</td>
  </tr>
</tbody>
</Table>

</div>

    )
  }
}
export default adminLayout(Employe);
