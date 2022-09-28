import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import adminLayout from "../hoc/adminLayout"
import Form from 'react-bootstrap/Form';
import "../assets/css/rates.css"

class Base_rate extends React.Component {
    constructor(props) {
        super(props);
        this.props = props

        this.state = {notzero:''}
    }

    changeeve = (event) => {
        this.setState({notzero:event.target.value})
        if(this.state({notzero:event.target.value<=0})){
            this.setState({notzro:""})
    }
    
    else{
        this.setState({notzro:event.target.value})
    }
}

    render() {
        return (
            <>
                <div className='baserate my-3' style={this.basefun}>
                    <h3 className="head">Add Date and Rates</h3>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Copy Rates
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='w-25'>
                            <Dropdown.Item href="#/action-1">King</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Queen</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <h5 className='my-4'>Select Room Type</h5>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </div>
                <div className="header ">
                    <h2 className="title1">Add Rates</h2>
                    <div className="">
                        <form>
                            <div className="row" >
                                <div className="col-4">

                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Event Name</label>
                                        <input type="text" className="form-control ratein" id="event" aria-describedby="emailHelp" placeholder="Enter event" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label htmlFor="example">Start Date</label>
                                        <input placeholder="Select date" type="date" id="example" className="form-control ratein" />

                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label htmlFor="example">Start Date</label>
                                        <input placeholder="Select date" type="date" id="example" className="form-control" />

                                    </div>
                                </div>
                            </div>

                            <div className="row my-3" >
                                <div className="col-2">

                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Min Los</label>
                                        <input type="number" className="form-control ratein" id="minlos" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label htmlFor="example">Max Los</label>
                                        <input type="number" className="form-control ratein" id="maxlos" aria-describedby="emailHelp" />

                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label htmlFor="example">Closed To Arival</label><br />
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="cloesArival" id="inlineRadio1" value="option1" />
                                            <label className="form-check-label" htmlFor="inlineRadio1">yes</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="cloesArival" id="inlineRadio2" value="option2" />
                                            <label className="form-check-label" htmlFor="inlineRadio2">no</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-2">
                                    <div className="form-group">
                                        <label htmlFor="example">Closed To Departure</label><br />
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="closeDeparture" id="inlineRadio1" value="option1" />
                                            <label className="form-check-label" htmlFor="inlineRadio1">yes</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="closeDeparture" id="inlineRadio2" value="option2" />
                                            <label className="form-check-label" htmlFor="inlineRadio2">no</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-3" >
                                <div className="col">

                                    <div className="form-group">
                                        <div className="form-group">
                                            <label htmlFor="example">Do You Want Extra Charge</label><br />
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="extraCharge" id="inlineRadio1" value="option1" />
                                                <label className="form-check-label" htmlFor="inlineRadio1">yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="extraCharge" id="inlineRadio2" value="option2" />
                                                <label className="form-check-label" htmlFor="inlineRadio2">no</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row my-3">
                                <div className="col">
                                    <div className="form-group">
                                        <p>price</p>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Sunay</label>
                                        <input type="number" value={this.state.notzero} min="0" onChange={this.changeeve} className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Monday</label>
                                        <input type="number" className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Tuesday</label>
                                        <input type="number" className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Wedesday</label>
                                        <input type="number" className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Thursday</label>
                                        <input type="number" className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Friday</label>
                                        <input type="number" className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Saturday</label>
                                        <input type="number" className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                    </div>
                                </div>

                                
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }

}

export default adminLayout(Base_rate);