import React, {useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import api from '../../services/api'
import './persons.css';

function Persons() {
    const [teachers,setTeachers] = useState([])
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

    return (
        <div>
            <div className="menu-suspenso-pessoas">

                <div className="part1-pessoas">
                    
                    <a className="turmas-menu-pessoas" href="">
                        Turmas
                    </a>

                </div>

                <div className="list-names-center-pessoas">
                    <div className="item-1-pessoas">
                        <a id="mural-menu-pessoas" href="">Mural</a>
                    </div>

                    <div className="item-2-pessoas">
                        <a id="atividades-menu-pessoas" href="">Atividades</a>
                    </div>

                    <div className="item-3-pessoas">
                        <a id="pessoas-menu-pessoas" href="">Pessoas</a>
                    </div>

                    <div className="item-4-pessoas">
                        <a id="notas-menu-pessoas" href="">Notas</a>
                    </div>
                </div>

                <div className="logout-pessoas">
                    <button className="btn-logout-menu-suspenso-pessoas">Logout</button>
                </div>
                
            </div>

            <div className="navegacao-pessoas">

                <div className="professores">

                    <div className="title-professores">
                        <h1 className="title-class-professores">Professores</h1>

                        <input typeName="text" className="envio-email-prof" placeholder="Convite pelo email"/>

                        <button className="submit-convite-prof" name="subconvprof">Convidar</button>
                    </div>

                    <div className="lista-professores">
                        <ul>
                        {teachers.map(teachers => (
                            <li key={teachers.id}>
                                <strong> {teachers.name} </strong>
                            </li>
                        ))}
                        </ul>
                    </div>

                </div>

                <div className="alunos">

                    <div className="title-alunos">
                        <h1 className="title-class-alunos">Alunos</h1>

                        <input type="text" className="envio-email-aluno" placeholder="Convite pelo email"/>

                        <button className="submit-convite-aluno" name="subconvalun">Convidar</button>
                    </div>

                    <div className="lista-alunos">

                    </div>
                
                </div>

            </div>  
        </div>
    )
}

export default Persons;