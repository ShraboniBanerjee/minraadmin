import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import DashboardPage from './pages/DashboardPage';
import TypographyPage from './pages/TypographyPage'
import LoginPage from './pages/auth/LoginPage'
import ResetPassword from './pages/auth/ResetPassword';
import ProfilePage from './pages/profile/ProfilePage';
import ChangePasswordPage from './pages/profile/ChangePasswordPage';
import UserPreferencesPage from './pages/profile/UserPreferencesPage'
import Service from './pages/Service';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Rates from './pages/Rates';
import Baserate from './pages/Base_rate';
import Employe from './pages/Employe';
import Addemployee from './pages/Add_employee';
import Checkin from './pages/Check_in';
import Room from './pages/Room';
import Addroom from './pages/Add_room';
import Bookings from './pages/Bookings';
import Lostandfounds from './pages/Lost_and_founds';
import Roomservices from './pages/Roomservices';
import Arrivals from './pages/Arrivals';
import Departures from './pages/Departures';
import Inhouseguest from './pages/In_house_guest';
import Food from './pages/Food';
import Gym from './pages/Gym';
import Sports  from './pages/Sports';
import MakeReservation  from './pages/Make_Reservation';
import Refunds  from './pages/Refunds';
import Audit  from './pages/Audit';
import Fundmanagement  from './pages/Fund_management';


function App() {
  return (
        <Router>
            <Routes>
                <Route exact path='/' element={<DashboardPage/>} />
                <Route exact path='/login' element={<LoginPage/>} />
                <Route exact path='/reset-password' element={<ResetPassword/>} />
                <Route exact path='/profile' element={<ProfilePage/>} />
                <Route exact path='/change-password' element={<ChangePasswordPage/>} />
                <Route exact path='/preferences' element={<UserPreferencesPage/>} />
                <Route exact path='/typography' element={<TypographyPage/>} />
                <Route exact path='/service' element={<Service/>} />
                <Route exact path='/rates' element={<Rates/>} />
                <Route exact path='/base_rates' element={<Baserate/>} />
                <Route exact path='/employe' element={<Employe/>} />
                <Route exact path='/check-in' element={<Checkin/>} />
                <Route exact path='/room' element={<Room/>} />
                <Route exact path='/Add_room' element={<Addroom/>} />
                <Route exact path='/Add_employee' element={<Addemployee/>} />
                <Route exact path='/bookings' element={<Bookings/>} />
                <Route exact path='/lost_and_founds' element={<Lostandfounds/>} />
                <Route exact path='/roomservices' element={<Roomservices/>} />
                <Route exact path='/arrivals' element={<Arrivals/>} />
                <Route exact path='/departures' element={<Departures/>} />
                <Route exact path='/in_house_guest' element={<Inhouseguest/>} />
                
                <Route exact path='/food' element={<Food/>} />
                <Route exact path='/gym' element={<Gym/>} />
                <Route exact path='/sports' element={<Sports/>} />
                
                <Route exact path='/make_reservation' element={<MakeReservation/>} />
                
                <Route exact path='/refund' element={<Refunds/>} />
                <Route exact path='/audit' element={<Audit/>} />
                <Route exact path='/fund_management' element={<Fundmanagement/>} />
                

                
            </Routes>  
        </Router>
    )
}

export default App;
