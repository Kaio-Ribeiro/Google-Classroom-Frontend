import React from 'react';
import { Link } from 'react-router-dom';
import './dash.css';

function Dashboard() {
  return(
    <div id="body-dash">
     
        <h1 className="title-dash"> GOOGLE SALA DE AULA</h1>
          
          <div className="header">

          <button className="btn-turma">+</button> 
          <button className="btn-logout">Logout</button> 

          </div>

          <div className="content-w-dash">
          
          </div> 
        

        <footer>Integrator Project II Google Classroom - 2021</footer>
   
    </div>
  )
}
    
export default Dashboard;