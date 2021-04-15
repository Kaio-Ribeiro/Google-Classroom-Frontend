import React,{useEffect,useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './dash.css';
import api from '../../services/api'

function Dashboard() {
  const history = useHistory();
  const [classrooms,setClassrooms] = useState([])
  const userID = localStorage.getItem('userID')

  function logout() {
    history.push('/');
  }

  function navigateToCreateClassroom() {
    
    history.push('/createClassroom');
  }

  function storeClass(classroom) {
    
    localStorage.setItem('class_id', classroom.id);
    localStorage.setItem('classroom', JSON.stringify(classroom));
  }

  useEffect(() => {
    api.get('classrooms', {
      headers: {
        Authorization: userID,
      }
    },{

    }).then(response => {
      setClassrooms(response.data)
    })
  }, [userID])

  return(
    <div id="body-dash">
     
        <h1 className="title-dash"> GOOGLE SALA DE AULA</h1>
          
          <div className="header">

          <button className="btn-turma" onClick={navigateToCreateClassroom}>+</button> 
          <button className="btn-logout" onClick={logout}>Logout</button> 

          </div>

          <div className="content-w-dash">
            <ul>
              {classrooms.map(classroom => (
                <li key={classroom.id}>
                  
                  <div className="image-list">
                    <Link to="/mural" onClick={() => storeClass(classroom)}>
                      <strong> {classroom.title} </strong>
                      <p>{classroom.description}</p>
                    </Link>
                  </div>
                  
              </li>
              ))}
            </ul>
          </div> 
        

        <footer>Integrator Project II Google Classroom - 2021</footer>
   
    </div>
  )
}
    
export default Dashboard;