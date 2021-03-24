import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import './dash.css';
import api from '../../services/api'

function Dashboard() {
  const history = useHistory();
  const [classrooms,setClassrooms] = useState([])

  function logout() {
    history.push('/');
  }

  function navigateToCreateClassroom() {
    history.push('/createClassroom');
  }

  useEffect(() => {
    api.get('classrooms',{

    }).then(response => {
      setClassrooms(response.data)
    })
  }, [])

  return(
    <div id="body-dash">
     
        <h1 className="title-dash"> GOOGLE SALA DE AULA</h1>
          
          <div className="header">

          <button className="btn-turma" onClick={navigateToCreateClassroom}>+</button> 
          <button className="btn-logout" onClick={logout}>Logout</button> 

          </div>

          <div className="content-w-dash">
            <ul>
              {classrooms.map(classrooms => (
                <li key={classrooms.id}>
                <strong> {classrooms.title} </strong>
                <p>{classrooms.description}</p>
                
              </li>
              ))}
            </ul>
          </div> 
        

        <footer>Integrator Project II Google Classroom - 2021</footer>
   
    </div>
  )
}
    
export default Dashboard;