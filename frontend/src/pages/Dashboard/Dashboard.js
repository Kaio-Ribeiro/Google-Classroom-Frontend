import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './dash.css';

function Dashboard() {
  const history = useHistory();

    function handleLogout() {

        history.push('/');
    }

    function handleCreateClassroom() {

      history.push('/create-classroom');
  }


  return(
    <div id="body-dash">
     
        <h1 className="title-dash"> GOOGLE SALA DE AULA</h1>
          
          <div className="header">

          <button className="btn-turma" onClick={handleCreateClassroom}>+</button> 
          <button className="btn-logout" onClick={handleLogout}>Logout</button> 

          </div>

          <div className="content-w-dash">
          
          </div> 
        

        <footer>Integrator Project II Google Classroom - 2021</footer>
   
    </div>
  )
}
    
export default Dashboard;