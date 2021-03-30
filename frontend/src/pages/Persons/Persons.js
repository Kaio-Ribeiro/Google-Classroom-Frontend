import React, {useEffect,useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'
import './persons.css';
import emailjs from 'emailjs-com';

function Persons() {
    const history = useHistory();
    const [teachers,setTeachers] = useState([])
    const [students,setStudents] = useState([])
    const classID = localStorage.getItem('class_id')
    console.log(classID)

    useEffect(() => {
        api.get('teachers', {
          headers: {
            Authorization: classID,
          }
        },{
    
        }).then(response => {
          setTeachers(response.data)
        })
    }, [classID])

    useEffect(() => {
        api.get('students', {
          headers: {
            Authorization: classID,
          }
        },{
    
        }).then(response => {
          setStudents(response.data)
        })
    }, [classID])

    async function deleteUser(id) {
        try {
            await api.delete(`/classroomsusers/${id}`, {
                headers: {
                    Authorization: classID,
                }
            })

            alert('Deletado com sucesso.')

            setTeachers(teachers.filter(teacher => teacher.id !== id))
            setStudents(students.filter(student => student.id !== id))
        }catch(err) {
            alert('Erro ao deletar, tente novamente.')
        }
    }

    function logout() {
        history.push('/');
      
    }
    

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmailMessage', 'template_i74hiel', e.target, 'user_UGPno79ye2fyfKxSFyeZO')
          .then((result) => {
              alert('Convite enviado com sucesso')
          }, (error) => {
              alert(error.message)
          })
          e.target.reset()
          
      }

    return (
        <div>
            <div className="menu-suspenso-pessoas">

                <div className="part1-pessoas">
                    
                    <Link className="turmas-menu-pessoas" to="/dashboard">
                        Turmas
                    </Link>

                </div>

                <div className="list-names-center-pessoas">
                    <div className="item-1-pessoas" >
                        <Link id="mural-menu-pessoas" to="/mural">Mural</Link>
                    </div>

                    <div className="item-2-pessoas">
                        <a id="atividades-menu-pessoas">Atividades</a>
                    </div>

                    <div className="item-3-pessoas">
                        <a id="pessoas-menu-pessoas">Pessoas</a>
                    </div>

                    <div className="item-4-pessoas">
                        <a id="notas-menu-pessoas">Notas</a>
                    </div>
                </div>

                <div className="logout-pessoas">
                    <button className="btn-logout-menu-suspenso-pessoas" onClick={logout}>Logout</button>
                </div>
                
            </div>

            <div className="navegacao-pessoas">

                <div className="professores">

                    <div className="title-professores">
                        <h1 className="title-class-professores">Professores</h1>
                        <form className="title-professor-form" onSubmit={sendEmail}>

                        <input typeName="text" className="envio-email-prof" placeholder="Convite pelo email" name="to_Email"/>
                        

                        <button type="submit" className="submit-convite-prof" name="subconvprof">Convidar</button>
                        </form>
                    </div>

                    <div className="lista-professores">
                        <ul>
                        {teachers.map(teacher => (
                            <li key={teacher.id}>
                                <strong> {teacher.name} </strong>
                                <button  className="btnDelete" onClick={() => deleteUser(teacher.id)}>Excluir</button>
                            </li>
                        ))}
                        </ul>
                    </div>

                </div>

                <div className="alunos">

                    <div className="title-alunos" >
                        <h1 className="title-class-alunos">Alunos</h1>
                        <form className="title-alunos-form" onSubmit={sendEmail}>
                            <input type="text" className="envio-email-aluno" placeholder="Convite pelo email" name="to_Email"/>
                            <button type="submit" className="submit-convite-aluno" name="subconvalun">Convidar</button>
                        </form>
                        
                    </div>

                    <div className="lista-alunos">
                        <ul>
                            {students.map(student => (
                                <li key={student.id}>
                                    <strong> {student.name} </strong>
                                    <button className="btnDelete" onClick={() => deleteUser(student.id)}>Excluir</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                
                </div>

            </div>  
        </div>
    )
}

export default Persons;