import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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


 <Button variant="primary" href="/Add_employee">Add New Employee</Button>
 <h3>

 </h3>
<Table striped bordered hover>
<thead>
  <tr>
    <th>ID
    <Form.Control
        type="text"
        id="text"
      />
    </th>
    <th>Name
    <Form.Control
        type="text"
        id="text"
      />
    </th>
    <th>Email
    <Form.Control
        type="text"
        id="text"
      />
    </th>
    <th>Phone Number
    <Form.Control
        type="text"
        id="text"
      />
    </th>
    <th>Role
    <Form.Control
        type="text"
        id="text"
      />
    </th>
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
