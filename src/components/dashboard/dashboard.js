import React from 'react';
import './dashboard.css';
import Alert from '../alert/alert';
import Canceled from '../canceled/canceled';
import Calendar from '../calendar/calendar';
import SearchDoctor from '../searchDoctor/searchDoctor';
import CurrentAppointments from '../currentAppointments/currentAppointments';

const Dashboard = ({appointments}) =>{
    return(
        <div className="dashboard">
                <div className="containerLeft">
                    <Calendar/>
                    <Alert/>
                    <Canceled/>
                </div>
             <div className="containerRight">
                    <SearchDoctor/>
                    <CurrentAppointments appointments={appointments}/>
                </div>
            </div>
    );
}

export default Dashboard;