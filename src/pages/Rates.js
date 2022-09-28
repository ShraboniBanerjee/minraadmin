import React from 'react'
import adminLayout from "../hoc/adminLayout"
import { Link } from 'react-router-dom';
import imagenew from '../assets/images/edit.png'
import imagenew1 from '../assets/images/trash.png'

class Rates extends React.Component {


    constructor(props) {
        super(props);

        this.state = { hj: false }
    }


    baserate = () => {
        document.getElementById('rate').style.display = 'none';
        this.setState({ hj: true })
        console.log(this.state.hj)
        console.log("j")
    };

    render() {
        return <> <div>
            <h3 className="head">Rates and Availablity{this.state.hj} </h3>
            <p className="desc">about this page</p>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">King</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Normal</button>
                </li>
            </ul>

            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                    <div className="rate" id='rate' style={this.ratefun}>
                        <h6 className="smtitle my-3">Dates and Rates</h6>

                        <Link tag="button" type="button" onClick={this.baserate} className="btn btn-primary" to="/base_rates">Add Rate</Link>

                        <button type="button" className="btn btn-secondary mx-3">Copy Rate</button>
                        <div className="accordion k col-12 my-3" id="accordionExample">

                            <div className=" col-12 k">
                                <h2 className="ss k " id="headingOne">
                                    <button className="accordion-button k" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Room Types and Rates
                                    </button>
                                </h2>

                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">...</div>
            </div>
            <div id="collapseOne" className="accordion-collapse ss collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body d">
                        <table className="table table-striped d">
                            <thead>
                                <tr>
                                    <th className="col-2">Name</th>
                                    <th className="col-1">Start Date</th>
                                    <th className="col-1">End Date</th>
                                    <th className="col-1">Min Los</th>
                                    <th className="col-1">Max Los</th>
                                    <th className="col-1">Start Date</th>
                                    <th className="col-4">Days Of Week</th>
                                    <th className="col-1">Edit/Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr scope="row d">
                                    <td>

                                        <div className="col-1 " id="accordionExample">
                                            <div className="">
                                                <h2 className="" id="headingOne">
                                                    <button className=" add" data-bs-toggle="collapse" data-bs-target="#ratedate">
                                                        <span className="circle plus"></span>
                                                    </button>
                                                </h2>

                                            </div>
                                        </div>

                                    </td>
                                    <td className="col-1">Mark</td>
                                    <td className="col-1">Otto</td>
                                    <td className="col-1">@mdo</td>
                                    <td className="col-1">Mark</td>
                                    <td className="col-1">Otto</td>
                                    <td className="col-4">@mdo</td>
                                    <td className="col-1"><img className='img' src={imagenew} alt="" /><img className='img' src={imagenew1} alt="" /></td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>

            <div id="ratedate" className="accordion-collapse collapse" aria-labelledby="ratedate" data-bs-parent="#ratedate">
                            <div className="accordion-body">
                                <div className="row d-flex  my-3">
                                    <div className="col">
                                        <div className="form-group">
                                            <p>price</p>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Sunday</label>
                                            <input type="number" value={this.state.notzero} min="0" onChange={this.changeeve} className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Monday</label>
                                            <input type="number" className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Tuesday</label>
                                            <input type="number" className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Wedesday</label>
                                            <input type="number" className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Thursday</label>
                                            <input type="number" className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Friday</label>
                                            <input type="number" className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Saturday</label>
                                            <input type="number" className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
        </div>

        </>
    }
}

export default adminLayout(Rates);
