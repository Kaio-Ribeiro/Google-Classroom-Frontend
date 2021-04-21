import React, {useEffect,useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'
import './persons.css';

function Persons() {
    const history = useHistory();
    const [teachers,setTeachers] = useState([])
    const [students,setStudents] = useState([])
    const [emailStudent,setEmailStudent] = useState('')
    const [emailTeacher,setEmailTeacher] = useState('')
    const classID = localStorage.getItem('class_id')
    const classroom = JSON.parse(localStorage.getItem('classroom'));

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
            if (window.confirm('Quer mesmo deletar essa pessoa?')) {
                await api.delete(`/classroomsusers/${id}`, {
                    headers: {
                        Authorization: classID,
                    }
                })

                setTeachers(teachers.filter(teacher => teacher.id !== id))
                setStudents(students.filter(student => student.id !== id))

                alert('Deletado com sucesso.')

              }
            
        }catch(err) {
            alert('Erro ao deletar, tente novamente.')
        }
    }

    function logout() {
        history.push('/');
      
    }

    async function inviteTeacher() {
        const dataTeacher = {email: emailTeacher, code: classroom.code}
        console.log(emailStudent)

        try {
            await api.put('/teachers', dataTeacher)

            alert('Professor adicionado')


        }catch(err) {
            alert('Falha ao adicionar professor')
        }
          
    }
    

    async function sendEmail(e) {
        e.preventDefault()
        const dataEmail = {email: emailStudent, code: classroom.code}
        console.log(emailStudent)

        try {
            await api.post('/send-email', dataEmail)

            alert('E-mail enviado com sucesso')

        }catch(err) {
            alert('Falha no envio do e-mail')
        }
          
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
                        <Link id="atividades-menu-pessoas" to="/homeworks">Atividades</Link>
                    </div>

                    <div className="item-3-pessoas">
                        <Link id="materiais-menu-pessoas" to="/materials">Materiais</Link>
                    </div>

                    <div className="item-4-pessoas">
                        <Link id="pessoas-menu-pessoas" to="/persons">Pessoas</Link>
                    </div>

                    <div className="item-5-pessoas">
                        <Link id="notas-menu-pessoas" to="/notas">Notas</Link>
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
                        <form className="title-professor-form" onSubmit={inviteTeacher}>
                            <input typename="text" className="envio-email-prof" placeholder="Convite pelo email" name="to_Email" value={emailTeacher} onChange={e => setEmailTeacher(e.target.value)}/>
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
                            <input type="text" className="envio-email-aluno" placeholder="Convite pelo email" name="to_Email" value={emailStudent} onChange={e => setEmailStudent(e.target.value)}/>
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