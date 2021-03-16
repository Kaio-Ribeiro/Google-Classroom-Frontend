import React from 'react';
import '../styles/pages/dash.css';

function Dashboard() {
  return(
    <div>
      <div className="container">
        <h1 className="title"> GOOGLE SALA DE AULA</h1>
          
        <div className="header">

          <input type="checkbox" id="check-turma" name="mm"/>
          <label  className="check-turma"> </label>

          <input type="checkbox" id="check-logout" name="mm"/>
          <label className="check-logout"> </label>

        </div>

        <div className="content-wraper">
          
        </div>

        <footer>Integrator Project II Google Classroom - 2021</footer>
      </div>
    </div>
  )
}
    
export default Dashboard;