import React, {useEffect,useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'
import './notas_alunos_atvd.css';
import emailjs from 'emailjs-com';
import { data } from 'jquery';

function Notas_alunos_atvd() {
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
        <div class="menu-suspenso-notas-part2">
            <div class="part1-notas-part2">
                <Link class="turmas-menu-notas-part2" to="/dashboard">Turmas</Link>
            </div>
            <div class="list-names-center-notas-part2">
                <div class="item-1-notas-part2">
                    <Link id="mural-menu-notas-part2" to="/mural">Mural</Link>
                </div>
                <div class="item-2-notas-part2">
                    <Link id="atividades-menu-notas-part2" to="/homeworks">Atividades</Link>
                </div>
                <div class="item-3-notas-part2">
                    <Link id="materiais-menu-notas-part2" to="/materials">Materiais</Link>
                </div><div class="item-4-notas-part2">
                    <Link id="pessoas-menu-notas-part2" to="/persons">Pessoas</Link>
                </div><div class="item-5-notas-part2">
                    <Link id="notas-menu-notas-part2" to="/notas">Notas</Link>
                </div>
            </div>
            <div class="logout-notas-part2">
                <button class="btn-logout-menu-suspenso-notas-part2">Logout</button>
            </div>
        </div>
        <div class="navegacao-notas-part2">
            <div class="notas-part2">
                <div class="title-notas-part2">
                    <h1 class="title-class-notas-part2">Atividade X</h1>
                </div>
                <div class="lista-atividades-part2">
                        <table width="100%" class="notas-itens-part2">
                             <thead class="itens-notas-01-part2">
                                 <tr>
                                     <th>Alunos</th>
                                     <th>Prazo para Entrega</th>
                                     <th>Data de Entrega</th>
                                     <th>Nota</th>
                                 </tr>
                             </thead>
                             <tbody class="itens-notas-02-part2">
                                 <tr>
                                     <td>Kaio Anderson</td>
                                     <td>20/04/2021</td>
                                     <td>15/04/2021</td>
                                     <td>10</td>
                                 </tr>
                                
                             </tbody>
                         </table>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Notas_alunos_atvd;