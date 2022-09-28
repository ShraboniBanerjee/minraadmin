import React from 'react'
import adminLayout from "../hoc/adminLayout"

import "../assets/css/rates.css"
import { Link } from 'react-router-dom';
import imagenew from '../assets/images/edit.png'
import imagenew1 from '../assets/images/trash.png'
import 'reactjs-popup/dist/index.css';
import Loading from '../images/Loading';


class Rates extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            ratesdata: [], roomtype: [],
            alldays: [],
            currentRoomId: "",
            id: [],
            total: [],
            delete_id: 0,
            room_rate: [],
            rates: [],
            calculate: 0,
            diff: [],
            newval:[],
            msg:"",
            loading:false,
            roomTypes:[]
        }
    }


    baserate = () => {
        document.getElementById('rate').style.display = 'none';
    };


    checkToken = () => {
        if (localStorage.getItem("data")) {
            // get token and do anything
            this.setState(JSON.parse(localStorage.getItem("data")))
    

        }
    }

     componentDidMount() {
        this.checkToken()
 
        this.updateRates()
    }
    
   
     updateRates = async () => {
        let a = (JSON.parse(localStorage.getItem("data")))
        let url = "https://django.rhgl9cf0lt9s2.ap-south-1.cs.amazonlightsail.com/rates/"
        // let url = "http://127.0.0.1:8000/rates/"
        this.setState({loading:true})
        let data = await fetch(url, {
            method: 'GET',
            headers: {
                'content-type': "application/json",
                'Authorization': "Bearer " + a['token']
            },

        });
        let parsedata = await data.json()
        console.log(parsedata.rates)
        this.setState({loading:false})



        this.setState({ ratesdata: parsedata.rates_data })
        this.setState({roomTypes:parsedata.room_types})

    }

    selectfun = async (e) => {
        this.checkToken()
 
        
        this.setState({myroom_type:e.target.value})
        let a = (JSON.parse(localStorage.getItem("data")))
        let url = "https://django.rhgl9cf0lt9s2.ap-south-1.cs.amazonlightsail.com/roomtype-rates/"
        // let url = "http://127.0.0.1:8000/roomtype-rates/"

        let data = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': "application/json",
                'Authorization': "Bearer " + a['token']
            },
            body: JSON.stringify({
                room_type: e.target.value
                
            }),
            
        

        })
        let room_data = await data.json()
        console.log('gas',room_data.rates)
        this.setState({loading:false})
        this.setState({ ratesdata: room_data.rates })
    }
            

    handleEdit = async(id) => {
        for (let i = 0; i < this.state.diff; i++) {
            //        // Handle data

            // let thevalues = document.getElementById(`ratesval${i}`).value
            let thevalues = parseInt(document.getElementById(`myval${i}`).value)
            console.log(document.getElementById(`myval${i}`).value)
            this.state.newval.push(thevalues)

        }
        let a = (JSON.parse(localStorage.getItem("data")))
        let url = `https://django.rhgl9cf0lt9s2.ap-south-1.cs.amazonlightsail.com/rates/${id}/`
        // let url = `http://127.0.0.1:8000/rates/${id}/`
        let data = await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': "application/json",
                'Authorization': "Bearer " + a['token']
            },
            body:JSON.stringify({
                week_day:`${this.state.newval}`
            })
        });
        data = await data.json()
        this.setState({msg:data.msg})
        setTimeout(() => {
            this.setState({msg:''})
          }, 9000);
        
        
        
    }
    getdays = async (e) => {

        console.log('he', e.target.className.split(' ')[1])
        let theday = e.target.className.split(' ')[1]
        let k = JSON.parse('[' + theday + ']')
        let diff_day = parseInt(e.target.className.split(' ')[2])
        this.setState({ diff: diff_day })
        this.setState({ rates: k })
        // this.state.ratesdata.map((e =>{ console.log(typeof JSON.parse("[" + e.week_day + "]") )}))

        let myid = e.target.id
        if (myid === this.state.currentRoomId) {

            this.setState({ currentRoomId: "no" })
            return false;
        }
        else {

            this.setState({ currentRoomId: myid })
        }


        this.state.id.push(myid)
        // if (!this.state.id.includes(myid)){
        this.checkToken()
        let a = (JSON.parse(localStorage.getItem("data")))
        let url = `https://django.rhgl9cf0lt9s2.ap-south-1.cs.amazonlightsail.com/rates/${myid}`
        // let url = `http://127.0.0.1:8000/rates/${myid}`
        let data = await fetch(url, {
            method: 'GET',
            headers: {
                'content-type': "application/json",
                'Authorization': "Bearer " + a['token']
            },

        });
        let parsedata = await data.json()
        console.log(parsedata)
        console.log(parsedata.days.length)
        for (let i = 0; i <= parsedata.days.length; i++) {
            this.state.room_rate.push(e.target.name)
        }
        this.setState({ total: parsedata.total })
        this.setState({ alldays: parsedata.days })
        console.log(this.state.alldays)

        // console.log(this.state.alldays[0].room_rent)

        // }
    }

    delete_it = async () => {
        document.getElementById("myModal").style.display = "none"
        let myid = this.state.delete_id
        console.log("myid->", myid)
        this.checkToken()
        let a = (JSON.parse(localStorage.getItem("data")))
        let url = `https://django.rhgl9cf0lt9s2.ap-south-1.cs.amazonlightsail.com/rates/${myid}`
        // let url = `http://127.0.0.1:8000/rates/${myid}`
        let data = await fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': "application/json",
                'Authorization': "Bearer " + a['token']
            },
            
        });
        console.log(data)
        this.updateRates();
    }

    delete_this = (e) => {
        console.log("ddd")
        document.getElementById("myModal").style.display = "block";
        let myid = e.target.id
        console.log(myid)
        this.setState({ delete_id: myid })
    }

    myinput = (inputEv, index) => {

        const value = inputEv.target.value;
        

        this.setState({ rates: (stte) => stte.map((val, i) => (i !== index ? val : value)) });

        let add = 0
        document.getElementById(`myval${index}`).value = value;
        console.log('myvakas', parseInt(document.getElementById(`myval0`).value))
        for (let i = 0; i <= this.state.diff; i++) {
            //        // Handle data

            // let thevalues = document.getElementById(`ratesval${i}`).value
            let thevalues = 0

            if (document.getElementById(`myval${i}`) !== null) {
                thevalues = parseInt(document.getElementById(`myval${i}`).value)
                console.log('myvak', parseInt(document.getElementById(`myval${i}`).value))
            }
            else {
                thevalues = 0
            }

            if (isNaN(thevalues)) {
                thevalues = 0
            }


            add += thevalues
            this.setState({ calculate: add })
        }


    }

    

    render() {
        return <> <div>
            
            <h3 className="head">Rates and Availablity </h3>
            <p className="desc">about this page</p>
            { this.state.msg !== '' && <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{this.state.msg}</strong> </div>}
            
                
                    <div className="rate" id='rate' style={this.ratefun}>
                        <h6 className="smtitle my-3">Dates and Rates</h6>
                        
                        <div className="row">
                            <div className="col-2">
                            <Link tag="button" type="button" onClick={this.baserate} className="btn btn-primary" to="/base_rates">Add Rate</Link>
                            </div>

                            <div className="col-2">
                            <button type="button" className="btn btn-secondary mx-3">Copy Rate</button>
                            </div>

                            <div className="col">
                            <h5 className=''>Select Room Type</h5>
                            <div className="select">
                                <select onClick={this.selectfun} onChange={this.selectfun} aria-label="Default select example">
                                     {this.state.roomTypes.map((element) => { return <option value={`${element.room_all_type}`}>{element.room_all_type}</option> })} 
                                </select>
                            </div>
                            </div>
                        </div>

                        

                        
                        
                       
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
               

          
            
            <div id="collapseOne" className="accordion-collapse collapse show d" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {/* <table className="table table-striped">
                            <thead className=''>
                                <tr>
                                    <th className="col-1">Name</th>
                                    <th className="col-1 th-m">Start Date</th>
                                    <th className="col-2">End Date</th>
                                    <th className="col-1">Min Los</th>
                                    <th className="col-1">Max Los</th>
                                    <th className="col-1">closed arrivals</th>
                                    <th className="col-1">closed departure</th>
                                    <th className="col-1">Extra Charge</th>
                                    <th className="col-3">Days Of Week</th>
                                    <th className="col-3">Room Rent</th>
                                    <th className="col-2">Edit/Delete</th>
                                </tr>
                            </thead>
                            <tbody>{this.state.ratesdata.map((element)=>{ return <> <div className="d">
                                <tr scope="row d">
                                
                                    <td className="col-2 m-l">

                                        <div className="col-2 m-l" id="accordionExample">
                                            <div className="">
                                                <h2 style={{display:"flex"}} className="" id="headingOne">
                                                    <button className=" add" data-bs-toggle="collapse" data-bs-target="#ratedate">
                                                    <span className="circle plus"></span>
                                                    </button>
                                                    {element.interval_name} 
                                                </h2>

                                            </div>
                                        </div>

                                    </td>
                                    
                                    <td className="col-1">{element.start_date}</td>        
                                    <td className="col-1">{element.end_date}</td>
                                    <td className="col-1">{element.min_los}</td>
                                    <td className="col-1">{element.max_los}</td>
                                    <td className="col-1">{element.closed_arrivals}</td>
                                    <td className="col-1">{element.closed_departure}</td>
                                    <td className="col-1">{element.extra_charge_rs}</td>
                                    <td className="col-3">{element.week_day}</td>
                                    <td className="col-1">{element.room_rent}</td>
                                    <td className="col-2"><img className='img' src={imagenew} alt="" /><img className='img' src={imagenew1} alt="" /></td>
                                </tr>
                                <div id="ratedate" className="accordion-collapse max-w  collapse" aria-labelledby="ratedate" data-bs-parent="#ratedate">
                            <div className="accordion-body row d-flex max-w">
                            <thead>
                                <tr>
                                    <th className="col-2">Name</th>
                                    <th className="col-2">Start Date</th>
                                    <th className="col-2">End Date</th>
                                    <th className="col-2">Min Los</th>
                                    <th className="col-2">Max Los</th>
                                    <th className="col-2">closed arrivals</th>
                                    <th className="col-2">closed departure</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                           
                                    <td className="col-2">{element.end_date}</td>
                                    <td className="col-2">{element.min_los}</td>
                                    <td className="col-2">{element.max_los}</td>
                                    <td className="col-2">{element.closed_arrivals}</td>
                                    <td className="col-2">{element.closed_departure}</td>
                                    <td className="col-2">{element.extra_charge_rs}</td>
                                    <td className="col-2">{element.week_day}</td>
    
                                </tr>
                            </tbody>
                               </div>
                               </div>
                               </div> </>
                            
                            })}
                            </tbody>
                        </table> */}
                         {this.state.loading && <Loading/>} 
                    {!this.state.loading && <div className="row d1">
                        <div className="col-1">Name</div>
                        <div className="col-1 wd marg">Start Date</div>
                        <div className="col-1 wd">End Date</div>
                        <div className="col-1">Min Los</div>
                        <div className="col-1">Max Los</div>
                        <div className="col-1">closed arrivals</div>
                        <div className="col-1">closed departure</div>
                        <div className="col-1">Extra Charge</div>
                        <div className="col-1">Days Of Week</div>
                        <div className="col-1">Room Rent</div>
                        <div className="col-1">Edit/Delete</div>
                    </div>}
                    <div id="accordionExample">


                        {this.state.ratesdata.map((element) => {
                            return <>
                                <div className="row d1 my-3">
                                    {/* <div className="col-1" key={element.id} style={{ marginLeft: '20px!important'}} > */}

                                    {/* <h2 style={{ display: "flex" }} className="" id="headingOne">
                                    <button span className=" add" data-bs-toggle="collapse" data-bs-target={`#${element.interval_name}`}>
                                        <span id={`${element.id}`} onClick={this.getdays} className="circle plus"><input type="hidden" value={element.id} /></span>
                                    </button>
                                    {element.interval_name}
                                </h2> */}

                                    {/* </div> */}
                                    <div className="col-1">{element.interval_name}</div>
                                    <div className="col-1 wd marg">{element.start_date}</div>
                                    <div className="col-1 wd">{element.end_date}</div>
                                    <div className="col-1">{element.min_los}</div>
                                    <div className="col-1">{element.max_los}</div>
                                    <div className="col-1">{element.closed_arrivals}</div>
                                    <div className="col-1">{element.closed_departure}</div>
                                    <div className="col-1">{element.extra_charge_rs}</div>
                                    <div className="col-1">{element.total_days}</div>
                                    <div className="col-1">{element.room_rent}</div>

                                    {/* NOTE:- please do not change the class name and position if you want to add the class then add after the data like if you want to add col-1 in class  then add it like className = {`img ${element.week_day} ${element.total_days} col-1`} */}

                                    <div className="col-1"><img className={`img ${element.week_day} ${element.total_days}`} src={imagenew} id={`${element.id}`} name={`${element.room_rent}`} onClick={this.getdays} alt="" />

                                        <img className='img' id={element.id} onClick={this.delete_this} src={imagenew1} alt="" /></div>
                                    <hr />
                                </div>

                                <div id={`${element.interval_name}`} className="accordion-collapse max-w  collapse" aria-labelledby={`${element.interval_name}`} data-bs-parent={`${element.interval_name}`} style={{ display: this.state.currentRoomId === element.id ? "block" : "none" }}>
                                    <div className="accordion-body row d-flex max-w">
                                        <div className="row  my-3">

                                            <div className="col-1">
                                                <div className="form-group">
                                                    <p><b>price</b></p>
                                                    <p><b>{this.state.calculate}</b></p>
                                                </div>
                                            </div>

                                            <div style={{
                                                overflowX: "scroll",
                                                "display": "flex",
                                                maxWidth: "1200px",
                                                width: "1200px"

                                            }}>
                                                {this.state.alldays.map((e, index) => {
                                                    return <>
                                                        <div className="col-1 mx-3 me-3">
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputEmail1">{e}</label>
                                                                <input type="number" onChange={(event) => this.myinput(event, index)} value={this.state.rates[index]} min="0" className="form-control ratein" id={`myval${index}`} aria-describedby="emailHelp" />
                                                                {/* <input type="number" onChange={(event) => this.myinput(event, index)} value={this.state.room_rate[index]} min="0"  className="form-control ratein" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                                                            </div><br />
                                                        </div>
                                                    </>
                                                })}
                                                
                                            </div>
                                            <button style={{width:'100px',borderRadius:'50px'}} onClick={() => this.handleEdit(element.id)} className='btn btn-danger'>confirm</button>
                                            {/* <div className="col">
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
                                    </div> */}


                                        </div></div>
                                </div></>
                        })}
                    </div>
                </div>
            </div>

            {/* <div id="ratedate" className="accordion-collapse collapse" aria-labelledby="ratedate" data-bs-parent="#ratedate">
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
                        </div> */}
        </div>
            <div id="myModal" className="modal">


                <div className="modal-content">
                    <span onClick={() => document.getElementById("myModal").style.display = "none"} className="close">&times;</span>
                    <p>do you want to delete this id</p>
                    <input type='button' value='confirm' onClick={this.delete_it} className='popup-btn' />
                </div>

            </div>

        </>
    }
}

export default adminLayout(Rates);