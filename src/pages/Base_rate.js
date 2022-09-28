import React from 'react'
import adminLayout from "../hoc/adminLayout"
import "../assets/css/rates.css"



class Base_rate extends React.Component {
    constructor(props) {
        super(props);
        this.props = props
        
        this.state = {
            notzero: '',
            cloesArival: 'no',
            closeDeparture: 'no',
            extraCharge: 'no',
            startdate: null,
            enddate: null,
            sample:[],
            days: [],
            conditionstart: [],
            conditionend: [],
            check_len: [],
            msg: "",
            error_message:'',
            roomtypes: [],
            room_rate: [],
            calculate:0,
            indexcal:[],
            selectfunval:false,
            this_room:[],
            myroom_type:[],
            all_values:[],
            status:[],
             todayDate:  new Date().toISOString().slice(0, 10)
        }
    }


    checkToken = () => {
        if (localStorage.getItem("data")) {
            // get token and do anything
            this.setState(JSON.parse(localStorage.getItem("data")))
            this.setState({ message: "User already exists" })

        }
    }
    async componentDidMount() {
        this.checkToken()
        let a = (JSON.parse(localStorage.getItem("data")))
        let url = `https://django.rhgl9cf0lt9s2.ap-south-1.cs.amazonlightsail.com/rates/`
        // let url = "http://127.0.0.1:8000/rates/"
        let data = await fetch(url, {
            method: 'GET',
            headers: {
                'content-type': "application/json",
                'Authorization': "Bearer " + a['token']
            },

        });
        let parsedata = await data.json()
        this.setState({ roomtypes: parsedata.room_types })
        

    }
    changeeve = (event) => {
        this.setState({ notzero: event.target.value })
        if (this.state({ notzero: event.target.value <= 0 })) {
            this.setState({ notzro: "" })
        }

        else {
            this.setState({ notzro: event.target.value })
        }
    }


    extraCharge = (event) => {

        this.setState({ extraCharge: event.target.value})
        
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        let eventname = document.getElementById('event')
        let startdate = document.getElementById('startdate')
        let enddate = document.getElementById('enddate')
        let minlos = document.getElementById('minlos')
        let maxlos = document.getElementById('maxlos')
        let closeDeparture = ''
        let cloesArival = ''
        let extraCharge = ''
        let extra_rs = 0

        if (document.getElementById('closeDeparture1').checked) {
          closeDeparture = document.getElementById('closeDeparture1').value;
          }
        else{
            closeDeparture = 'no'
        }

        if (document.getElementById('cloesArival1').checked) {
            cloesArival = document.getElementById('cloesArival1').value;
            }
        else{
           cloesArival = 'no'
          }
          
          if (document.getElementById('extraCharge1').checked) {
            extraCharge = true
            extra_rs = document.getElementById('extraamount').value
            }
            else{
           extraCharge = false
           extra_rs = 0
            }
   
        this.setState({all_values:[]})
        for(let i=0;i<this.state.check_len;i++){
        console.log(`ratesval${i}`)
        console.log(document.getElementById(`ratesval${i}`).value)
        this.state.all_values.push(document.getElementById(`ratesval${i}`).value)
        console.log(document.getElementById(`ratesval${i}`).value)
        }
        console.log('my->',this.state.all_values)
        this.checkToken()
        let a = (JSON.parse(localStorage.getItem("data")))
        let url = `https://django.rhgl9cf0lt9s2.ap-south-1.cs.amazonlightsail.com/rates/`
        // let url = "http://127.0.0.1:8000/rates/"
        let data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Authorization': "Bearer " + a['token']
            },
            body: JSON.stringify({
                interval_name: eventname.value,
                start_date: startdate.value,
                end_date: enddate.value,
                min_los: minlos.value,
                max_los: maxlos.value,
                closed_arrivals: cloesArival,
                closed_departure: closeDeparture,
                week_day: `${this.state.all_values}`,
                room_rent: this.state.this_room,
                local_room_type: this.state.myroom_type,
                extra_charge_rs: extra_rs,
                extra_charge: extraCharge,
                total_days:this.state.check_len
                
            })
            
        }).then((response) => response.json())
            .then((data) => {
                console.log('this is =>',data);
                this.setState({error_message:data.msg})
                if(data.msg === 'data Succsessfully added'){
                    this.setState({status:'pass'})
                }
                else{
                    this.setState({status:'fail'})
                    
                }
                setTimeout(() => {
                    this.setState({error_message:''})
                  }, 9000);
                document.getElementById('myform').reset()
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });
            console.log(data)
    }


    myfun = () => {

        if(this.state.sample.length <= 4) {

            let start_da = this.state.sample.indexOf('start') + 1
            start_da = this.state.sample[start_da] 
            let end_da = this.state.sample.indexOf('end') + 1
            end_da = this.state.sample[end_da] 
            start_da = new Date(start_da)
            end_da = new Date(end_da)

            if (end_da >= start_da) {

                let mynew = new Date(start_da)
                let myvalue = Math.abs(end_da - start_da)
                let diffDays = myvalue / (1000 * 60 * 60 * 24)
                this.setState({ check_len: diffDays })
                const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                this.setState({ days: [] })

               
                let days = []
                for (let i = 0; i <diffDays; i++) {

                    mynew.setDate(mynew.getDate() + 1);
                    days.push(weekdays[mynew.getDay()])

                }
                this.setState({ days: days })
            }
            else {
                this.setState({ msg: "please enter vaild" })
            }
        }
    }



    mycondition = () => {

        
        ////////////////////////

        if(this.state.sample.length <= 4){
            this.myfun()
        }
        
            




        /////////////////////////////

        // if (this.state.conditionstart.length !== 0 && this.state.conditionend.length !== 0) {
        //     if (start_d !== null && end_d !== null && mystartdate !== '' && myenddate !== '') {
        //         if (this.state.conditionstart[0] !== mystartdate && this.state.conditionend[0] !== myenddate) {
        //             this.setState({ days: [] })
                   
        //             this.setState({ conditionstart: [] })
        //             this.setState({ conditionend: [] })
        //         }
        //         else {
        //             this.myfun()
        //         }
        //     }
        // }

        // else {

        //     if (start_d !== null && end_d !== null) {
        //         this.myfun()
        //         this.state.conditionstart.push(mystartdate)
        //         this.state.conditionend.push(myenddate)
        //     }

        // }
    }
    startdate = (e) => {
        
        if(!this.state.sample.includes('start')){
        this.state.sample.push('start')
        }
        if(this.state.sample.length <= 4){
        let position = this.state.sample.indexOf('start') + 1
        if(this.state.sample[position] !== String(e.target.value) ){
            if(this.state.sample[position] !== undefined){
              this.state.sample.splice(position,1,e.target.value)
        }   
        else{
            this.state.sample.push(e.target.value)
        }
        
    }
    
    }
        this.mycondition()
        this.calculate()
    }

    enddate = (e) => {
        
        if(!this.state.sample.includes('end')){
            this.state.sample.push('end')
            }
            if(this.state.sample.length <= 4){
            let position = this.state.sample.indexOf('end') + 1
            if(this.state.sample[position] !== String(e.target.value) ){
                if(this.state.sample[position] !== undefined){
                  this.state.sample.splice(position,1,e.target.value)
            }   
            else{
                this.state.sample.push(e.target.value)
            }
        }
        
        }
        
        this.mycondition()
        this.calculate()
        
    }   

    selectfun = async (e) => {
        this.checkToken()
 
        this.setState({selectfunval:true})
        this.setState({myroom_type:e.target.value})
        let a = (JSON.parse(localStorage.getItem("data")))
        let url = `https://django.rhgl9cf0lt9s2.ap-south-1.cs.amazonlightsail.com/roomtype-rates/`
        // let url = "http://127.0.0.1:8000/roomtype-rates/"
        let data = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': "application/json",
                'Authorization': "Bearer " + a['token']
            },
            body: JSON.stringify({
                room_type: e.target.value

            })


        }).then((response) => response.json())
            .then((data) => {
                if (this.state.room_rate.length >= 1) {
                    this.state.room_rate.pop();
                }
                
                this.state.room_rate.push(data.room_rent)
                this.setState({this_room:data.room_rent})
                let start_da = this.state.sample.indexOf('start') + 1
                start_da = this.state.sample[start_da]               
                let end_da = this.state.sample.indexOf('end') + 1
                end_da = this.state.sample[start_da]
                if(this.state.sample.length <= 4){
                    start_da = new Date(start_da)
                    end_da = new Date(end_da)
                    if (end_da >= start_da) {                    
                        let myvalue = Math.abs(end_da - start_da)
                        let diffDays = myvalue / (1000 * 60 * 60 * 24)
                        let total = diffDays * parseInt(data)
                        this.setState({calculate:total})
                        this.calculate()
                           // Handle data
                    }
                }
                else{
                    this.setState({calculate:0})
                    this.calculate()
                }
                
            })
            .catch((err) => {
                console.log(err.message);
            });
            console.log(data)
            this.calculate()
    }

    calculate = () =>{
        //////////
        if(this.state.sample.length <= 4){
        let start_da = this.state.sample.indexOf('start') + 1
        start_da = this.state.sample[start_da]
        let end_da = this.state.sample.indexOf('end') + 1
        end_da = this.state.sample[end_da]
    
       
            start_da = new Date(start_da)
            end_da = new Date(end_da)
           
            if (end_da >= start_da) {                    
               let myvalue = Math.abs(end_da - start_da)
               // let myvalue = Math.abs(end_da.getTime() - start_da.getTime())
                let diffDays = myvalue / (1000 * 60 * 60 * 24)
              // let diffDays = Math.ceil(myvalue / (1000 * 3600 * 24))
              
              
               let add = 0
               
                for(let i = 0;i<=diffDays;i++){
            //        // Handle data
                    
                   // let thevalues = document.getElementById(`ratesval${i}`).value
                   let thevalues = 0
                
                    if(document.getElementById(`ratesval${i}`) !==null){
                        thevalues = parseInt(document.getElementById(`ratesval${i}`).value)
                    }
                    else{
                        thevalues = 0
                    }

                    if(isNaN(thevalues))
                    {
                        thevalues = 0
                    }
                    
                    
                   add +=thevalues
                   this.setState({calculate:add})
                }
            }
            
        

    
    
        }
    }

    myinput = (inputEv, index) => {
        
        const value = inputEv.target.value;
        
        this.setState({ room_rate: (stte) => stte.map((val, i) => (i !== index ? val : value)) });
        this.calculate()
        
           }

    myroom = (e) =>{
        this.setState({this_room:e.target.value})
    }

    render() {
        return (

            <div >{ this.state.error_message !== '' && <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{this.state.error_message}</strong> </div>}
                <form id='myform' onSubmit={this.handleSubmit}>
                    <div className='row baserate my-5' >
                        <div className="col-3 my-3">
                            <h5 className=''>Select Room Type</h5>

                            <div className="select">
                                <select onClick={this.selectfun} onChange={this.selectfun} aria-label="Default select example">
                                    {this.state.roomtypes.map((element) => { return <option value={`${element.room_all_type}`}>{element.room_all_type}</option> })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="header " style={{
                        width: "100%"
                    }}>
                        <h2 className="title1">all rates</h2>
                        <div className="">

                            <div className="row" >
                                <div className="col-3">

                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Interval Name</label>
                                        <input type="text" className="form-control ratein" id="event" aria-describedby="emailHelp" placeholder="Enter event" required />
                                    </div>
                                </div>
                                
                                <div className="col-2">
                                    <div className="form-group">
                                        <label htmlFor="example">Start Date</label>
                                        <input placeholder="Select date"   onSelect={(e)=>this.startdate(e)} min={this.state.todayDate} onChange={(e)=>this.startdate(e)} type="date" id="startdate" className="form-control ratein" required/>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label htmlFor="example">End Date</label>
                                        <input placeholder="Select date" onSelect={(e)=>this.enddate(e)}  min={this.state.todayDate}  onChange={(e)=>this.enddate(e)} type="date" id="enddate" className="form-control ratein" required />

                                    </div>
                                </div>
                            </div>

                            <div className="row my-3" >
                                <div className="col-2">

                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Min Los</label>
                                        <input type="number" className="form-control ratein" id="minlos" aria-describedby="emailHelp" required/>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label htmlFor="example">Max Los</label>
                                        <input type="number" className="form-control ratein" id="maxlos" aria-describedby="emailHelp" required/>

                                    </div>
                                    </div>
                                    <div className="col-2">

                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Room rent</label>
                                        <input type="number" onChange={this.myroom} value={this.state.this_room} className="form-control ratein" id="minlos" aria-describedby="emailHelp" required />
                                    </div>
                                </div>
                                


                            </div>
                            <div className="row my-3" >

                                <div className="col-2">
                                    <div className="form-group">
                                        <label htmlFor="example" >Closed To Departure</label><br />
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="closeDeparture" id="closeDeparture1" value="yes" required/>
                                            <label className="form-check-label" htmlFor="closeDeparture1">yes</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="closeDeparture" id="closeDeparture2" value="no" />
                                            <label className="form-check-label" htmlFor="closeDeparture2">no</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label htmlFor="example">Closed To Arival</label><br />
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="cloesArival" id="cloesArival1" value="yes" required/>
                                            <label className="form-check-label" htmlFor="cloesArival1">yes</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="cloesArival" id="cloesArival2" value="no" />
                                            <label className="form-check-label" htmlFor="cloesArival2">no</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                        <div className="form-group" onChange={this.extraCharge.bind(this)}>
                                            <label htmlFor="example" >Do You Want Extra Charge</label><br />
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input"  type="radio" name="extraCharge" id="extraCharge1" value="yes" required/>
                                                <label className="form-check-label" htmlFor="extraCharge1">yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input"  type="radio" name="extraCharge" id="extraCharge2" value="no" />
                                                <label className="form-check-label" htmlFor="extraCharge2">no</label>
                                            </div>  <div className="form-check form-check-inline">
                                             
                                            </div>
                                        </div>

                                    
                                </div>
                                {this.state.extraCharge ==='yes' ? (
                                <div className="col-3">
                                    <div className="form-group">
                                        <label htmlFor="extrachargeamount">Enter Extra Charge Amount</label>
                                        <input type="number" className="form-control ratein" id="extraamount" aria-describedby="emailHelp" required />
                                    </div>
                                </div>):(<></>)}
                            </div>
                            <hr />
                            <div className="row my-3" >

                                <div className="col">
                                    <div className="form-group">
                                        <p><b>Total price</b></p>
                                        <p><b>{this.state.calculate}</b></p>
                                    </div>
                                </div>
                                {this.state.days.length !== 0 ? (
                                    <div style={{
                                        overflowX: "scroll",
                                        "display": "flex",
                                        maxWidth: "1200px",
                                        width: "1200px"
                                    }}>

                                        {this.state.days.map((element, index) => {
                                            return <>
                                                <div className="col-1 mx-3 me-3">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">{element}</label>
                                                    
                                                            <input type="number" onChange={(e) => this.myinput(e, index)} value={this.state.room_rate[0]} min='0' className="form-control ratein" id={`ratesval${index}`} aria-describedby="emailHelp" />
                        
                                                    </div><br />
                                                </div> </>
                                        })}
                                    </div>) : (<>
                                        <div style={{ maxWidht: '100%', "display": "flex" }}>
                                            <div className="col mx-3">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Sunday</label>
                                                    <input type="number" value={this.state.room_rate} min="0" onChange={this.changeeve} className="form-control ratein" disabled="disabled" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div></div>
                                            <div className="col mx-3">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Monday</label>
                                                    <input type="number" value={this.state.room_rate} min="0" onChange={this.changeeve} className="form-control ratein" disabled="disabled" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div></div>
                                            <div className="col mx-3">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Tuesday</label>
                                                    <input type="number" value={this.state.room_rate} min="0" onChange={this.changeeve} className="form-control ratein" disabled="disabled" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div></div>
                                            <div className="col mx-3">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Wednesday</label>
                                                    <input type="number" value={this.state.room_rate} min="0" onChange={this.changeeve} className="form-control ratein" disabled="disabled" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div></div>
                                            <div className="col mx-3">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Thursday</label>
                                                    <input type="number" value={this.state.room_rate} min="0" onChange={this.changeeve} className="form-control ratein" disabled="disabled" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div></div>
                                            <div className="col mx-3">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Friday</label>
                                                    <input type="number" value={this.state.room_rate} min="0" onChange={this.changeeve} className="form-control ratein" disabled="disabled" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div></div>
                                            <div className="col mx-3">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Saturday</label>
                                                    <input type="number" value={this.state.room_rate} min="0" onChange={this.changeeve} className="form-control ratein" disabled="disabled" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div></div>
                                        </div> </>)}


                                <div></div>
                            </div>
                            <input type="submit" className="btn btn-danger" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default adminLayout(Base_rate);