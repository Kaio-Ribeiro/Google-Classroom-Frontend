import React from 'react';
import '../styles/pages/dash.css';

function Dashboard() {
    return (

      <div class="container">

        <h1 class="title"> GOOGLE SALA DE AULA</h1>
        
        <div class="header"/>

          <input type="checkbox" id="check-turma" name="mm"/>
          <label  class="check-turma"> </label>

          <input type="checkbox" id="check-logout" name="mm"/>
          <label class="check-logout"> </label>

        </div>

        <div class="content-wraper">
          
        </div>

      </div>

      <footer>Integrator Project II Google Classroom - 2021</footer>
      )
    }
    
  export default Dashboard;