import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return <div className="border-end sidenav" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom ">
                <Link to="/">
                    <img alt="Alt content" src={require('./../assets/images/trident-logo.png')} />
                </Link>
            </div>
            <PerfectScrollbar className="sidebar-items">
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <Link tag="a" className="" to="/">
                            <i className="fa fa-dashboard"></i> Dashboard
                        </Link>
                </li>
                    

                    <li className="mb-1">
                        <Link tag="a" className="" to="/service">
                            <i className="fa fa-file-o"></i> Service
                        </Link>
                    </li>
                    
                   
                  
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Options
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to={'/employe'} className="rounded">Employees</Link></li>
                             <li><Link to={"/check-in"} className="rounded">Check-In</Link></li>
                        </ul>
                        </div>
                    </li> 

                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse1" aria-expanded="false">
                        Rooms
                        </button>
                        <div className="collapse" id="dashboard-collapse1">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to={"/room"} className="rounded">Room</Link></li>
                            <li><Link to={"/bookings"} className="rounded">Bookings</Link></li>
                           <li><Link to={"/roomservices"} className="rounded">Roomservices</Link></li>
                            <li><Link to={"/arrivals"} className="rounded">Arrivals</Link></li>
                            <li><Link to={"/departures"} className="rounded">Departures</Link></li>
                         <li>
                                <Link to="/rates" className="rounded">Rates</Link></li>
                        </ul>
                        </div>
                    </li> 


                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse2" aria-expanded="false">
                        Inventory
                        </button>
                        <div className="collapse" id="dashboard-collapse2">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to={"/food"} className="rounded">Food</Link></li>
                            <li><Link to={"/gym"} className="rounded">Gym</Link></li>
                            <li><Link to={"/sports"} className="rounded">Sports</Link></li>
                             </ul>
                        </div>
                    </li> 


                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse3" aria-expanded="false">
                        Reservation
                        </button>
                        <div className="collapse" id="dashboard-collapse3">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to={"/make_reservation"} className="rounded">Make Reservation</Link></li>
                             </ul>
                        </div>
                    </li> 


                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse4" aria-expanded="false">
                        Funds
                        </button>
                        <div className="collapse" id="dashboard-collapse4">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to={"/refund"} className="rounded">Refunds</Link></li>
                            <li><Link to={"/audit"} className="rounded">Audit</Link></li>
                            <li><Link to={"/fund_management"} className="rounded">Fund Management</Link></li>
                             </ul>
                        </div>
                    </li> 
                </ul>
            </PerfectScrollbar>
            <div className="dropdown fixed-bottom-dropdown">
                <a href="/" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://via.placeholder.com/50" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <span>Admin</span>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><Link className="dropdown-item" to="/profile"><i className="fa fa-user-circle" aria-hidden="true"></i> Profile</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/login"><i className="fa fa-sign-out" aria-hidden="true"></i> Sign out</Link></li>
                </ul>
            </div>
        </div>
    }
}

export default Sidebar;