import React from 'react';
import { useHistory } from 'react-router-dom';
import './dash.css';

function Dashboard() {
  const history = useHistory();

  function logout() {
    history.push('/');
  }

  function navigateToCreateClassroom() {
    history.push('/createClassroom');
  }


  return(
    <div id="body-dash">
     
        <h1 className="title-dash"> GOOGLE SALA DE AULA</h1>
          
          <div className="header">

          <button className="btn-turma" onClick={navigateToCreateClassroom}>+</button> 
          <button className="btn-logout" onClick={logout}>Logout</button> 

          </div>

          <div className="content-w-dash">
          
          </div> 
        

        <footer>Integrator Project II Google Classroom - 2021</footer>
   
    </div>
  )
}
    
export default Dashboard;