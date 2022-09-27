import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
class Make_Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
​
        <h3 className="head">Make Reservation{this.state.hj} </h3>
        <p className="desc">about this page</p>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Availability</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="guest-tab" data-bs-toggle="tab" data-bs-target="#guests" type="button" role="tab" aria-controls="guest-tab" aria-selected="false">Details</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#hotel" type="button" role="tab" aria-controls="hotel-tab" aria-selected="false">Add-Ons</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#booking" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Payment</button>
          </li>
          {/* <li className="nav-item" role="presentation">
            <button className="nav-link" id="payment-tab-pane" data-bs-toggle="tab" data-bs-target="#payment-tab-pane" type="button" role="tab" aria-controls="payment-tab-pane" aria-selected="false">Payment</button>
          </li> */}
​
          {/* new comment 1 */}
        </ul>
​
        <div>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
              <h5 className='my-4'>Make Reservation</h5>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Source
                </Dropdown.Toggle>
​
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Website</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Phone</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Agent</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Gmail</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
​
              <h2>    </h2>
              <div>
                <div className="row">
                  <div className="col-md-4">
                    <Form.Group controlId="dob">
                      <Form.Label>Check In</Form.Label>
                      <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group controlId="dob">
                      <Form.Label>Check Out</Form.Label>
                      <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>
                  </div>
​
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Room Types</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
​
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Allotment Block</Form.Label>
                    <Form.Select defaultValue="Select...">
                      <option>Choose...</option>
                      <option>None of the type...</option>
                    </Form.Select>
                  </Form.Group>
​
​
​
                </div>
              </div>
​
​
              <h2>    </h2>
​
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Enter Promo Code</Form.Label>
                  <Form.Control />
                </Form.Group>
​
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>  2 of 3 Select Plans</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Basic Plan</option>
                    <option>Discount Offer</option>
                  </Form.Select>
                </Form.Group>
              </Row>
​
            
​
            <h2>    </h2>
            <Button variant="primary">Search</Button>
            <h1></h1>
            <h2>Traveller Details</h2>
​
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Select The Room</th>
                    <th>Room Type</th>
                    <th>Check-In Date</th>
                    <th>Check-Out Date</th>
                    <th>Room Number</th>
                    <th>Adult</th>
                    <th>Child</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>King</td>
                    <td>Double</td>
                    <td>23.04.22</td>
                    <td>28.04.22</td>
                    <td>402</td>
                    <td>3</td>
                    <td>2</td>
                    <th><button>Edit</button></th>
                  </tr>
​
                  <tr>
                    <td>2</td>
                    <td>Queen</td>
                    <td>Single</td>
                    <td>5.05.22</td>
                    <td>8.05.22</td>
                    <td>302</td>
                    <td>4</td>
                    <td>3</td>
                    <th><button>Edit</button></th>
                  </tr>
​
​
​
                  <tr>
                    <td>3</td>
                    <td>King</td>
                    <td>Single</td>
                    <td>5.05.22</td>
                    <td>8.05.22</td>
                    <td>214</td>
                    <td>4</td>
                    <td>3</td>
                    <th><button>Edit</button></th>
                  </tr>
​
​
​
                  <tr>
                    <td>4</td>
                    <td>King</td>
                    <td>Single</td>
                    <td>5.05.22</td>
                    <td>8.05.22</td>
                    <td>142</td>
                    <td>4</td>
                    <td>3</td>
                    <th><button>Edit</button></th>
                  </tr>
​
​
                  <tr>
                    <td>5</td>
                    <td>Queen</td>
                    <td>Single</td>
                    <td>5.05.22</td>
                    <td>8.05.22</td>
                    <td>502</td>
                    <td>4</td>
                    <td>3</td>
                    <th><button>Edit</button></th>
                  </tr>
​
​
                  <tr>
                    <td>6</td>
                    <td>Queen</td>
                    <td>Single</td>
                    <td>5.05.22</td>
                    <td>8.05.22</td>
                    <td>106</td>
                    <td>4</td>
                    <td>3</td>
                    <th><button>Edit</button></th>
                  </tr>
                </tbody>
              </Table>
            </div>
​
            <div>
            </div>
            </div>
          </div>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade " id="guests" role="tabpanel" aria-labelledby="guest-tab" tabIndex="0">
          <h5 className='my-4'>Guest Details</h5>
​
          <Form>
            <Row className="mb-3">

            <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Your Pic</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
​
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>
​
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
​
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
​
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
​
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
​
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Your Documents</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Your Signature</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
​
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
​
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
</div>
</div>
<div className="tab-content" id="myTabContent">
            <div className="tab-pane fade  " id="booking" role="tabpanel" aria-labelledby="booking-tab" tabIndex="0">
          <h5 className='my-4'>Booking Information</h5>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Saved this information for next time`}
                />
              </div>
            ))}
          </Form>
​
​
          <Form>
            {['radio'].map((type) => (
              <div key={type} className="mb-3">
                <Form.Check type={type} id={`check-api-${type}`}>
                  <Form.Check.Input type={type} isValid />
                  <Form.Check.Label>{`Credit Card`}</Form.Check.Label>
                </Form.Check>
​
                <Form.Check type={type} id={`check-api-${type}`}>
                  <Form.Check.Input type={type} isValid />
                  <Form.Check.Label>{`Debit Card`}</Form.Check.Label>
                </Form.Check>
​
                <Form.Check type={type} id={`check-api-${type}`}>
                  <Form.Check.Input type={type} isValid />
                  <Form.Check.Label>{`Paypal`}</Form.Check.Label>
                </Form.Check>
              </div>
            ))}
          </Form>
​
​
​
          <Form>
            <Row>
​
              <Col xs={3}>
                <Form.Label>Name On Card</Form.Label>
                <Form.Control placeholder="" />
              </Col>
​
              <Col>
                <Form.Label>Credit Card Number</Form.Label>
                <Form.Control placeholder="" />
              </Col>
​
              <Col>
                <Form.Label>Expiration</Form.Label>
                <Form.Control placeholder="" />
              </Col>
​
              <Col>
                <Form.Label>CVV</Form.Label>
                <Form.Control placeholder="" />
              </Col>
            </Row>
          </Form>
          <h2>        </h2>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Saved my information for next time`}
                />
              </div>
            ))}
          </Form>
          <Button variant="primary">Make Payment</Button>
        
        </div>
​
</div>
        
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show " id="hotel" role="tabpanel" aria-labelledby="hotel-tab" tabIndex="0">
​
          <h5 className='my-4'>Hotel Details - King Bedroom</h5>
          <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/hotel-room-27254391.jpg" />
​
                  <Card.Body>
                    <Card.Title>Bedrooms Available</Card.Title>
                    <Card.Text>
                      You choose your luxury with us. Be comfortable and enjoy with time.
                    </Card.Text>
                    <Button variant="primary">Select</Button>
​
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
​
          <h5 className='my-4'>Hotel Details - Queen Bedroom</h5>
          <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="data:image/jpeg;base64,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" />
​
                  <Card.Body>
                    <Card.Title>Bedrooms Available</Card.Title>
                    <Card.Text>
                      You choose your luxury with us. Be comfortable and enjoy with time.
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <h2>                 </h2>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />
​
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>
​
            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
​
        </div>
      </div>
</div>
</div>
    )
  }
}
export default adminLayout(Make_Reservation);
