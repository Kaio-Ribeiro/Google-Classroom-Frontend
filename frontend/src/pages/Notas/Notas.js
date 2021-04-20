import React, {useEffect,useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'
import './notas.css';
import emailjs from 'emailjs-com';
import { data } from 'jquery';

function Notas() {
    const history = useHistory();
    const [teachers,setTeachers] = useState([])
    const [students,setStudents] = useState([])
    const [emailStudent,setEmailStudent] = useState('')
    const [emailTeacher,setEmailTeacher] = useState('')
    const classID = localStorage.getItem('class_id')
    const classroom = JSON.parse(localStorage.getItem('classroom'));

    
    function logout() {
        history.push('/');
      
    }

    return (
        <div>
        <div class="menu-suspenso-notas">
            <div class="part1-notas">
                <Link class="turmas-menu-notas" to="/dashboard">Turmas</Link>
            </div>
            <div class="list-names-center-notas">
                <div class="item-1-notas">
                    <Link id="mural-menu-notas" to="/mural">Mural</Link>
                </div>
                <div class="item-2-notas">
                    <Link id="atividades-menu-notas" to="/homeworks">Atividades</Link>
                </div>
                <div class="item-3-notas">
                    <Link id="materiais-menu-notas" to="/materials">Materiais</Link>
                </div><div class="item-4-notas">
                    <Link id="pessoas-menu-notas" to="/persons">Pessoas</Link>
                </div><div class="item-5-notas">
                    <Link id="notas-menu-notas" to="/notas">Notas</Link>
                </div>
            </div>

            <div class="logout-notas">
                    <button onClick={logout} class="btn-logout-menu-suspenso-notas">Logout</button>
            </div>

        </div>
        <div class="navegacao-notas">
            <div class="notas">
                <div class="title-notas">
                    <h1 class="title-class-notas">Lista de Atividades</h1>
                </div>
                <div class="lista-atividades">
                    <ul>
                        <li>
                            <strong> Atividade x </strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Notas;