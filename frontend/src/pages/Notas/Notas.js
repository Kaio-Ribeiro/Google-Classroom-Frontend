import React, {useEffect,useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'
import './notas.css';

function Notas() {
    const history = useHistory();
    const [homeworks, setHomeworks] = useState([])
    const classID = localStorage.getItem('class_id')
    
    function logout() {
        history.push('/');
    }

    console.log(classID)

    useEffect(() => {
        api.get('homeworks', {
        headers: {
            Authorization: classID,
        }
        },{

        }).then(response => {
            setHomeworks(response.data)
        })
    }, [classID])

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
                    <h1 class="title-class-notas">Atividades</h1>
                </div>
                <div class="notes-atividades">
                    <ul>
                        {homeworks.map(homework => (
                            <li key={homework.id}>
                            
                                <div className="notes-homeworks">
                                    <strong>{homework.title}</strong>
                                    <p className='date-time'>Item postado em: {homework.hours} {homework.day}/{homework.month}/{homework.year}</p>
                                    
                                    <p className='delivery-date'>Data de entrega: {homework.hours} {homework.dayLimit}/{homework.monthLimit}/{homework.yearLimit}</p>
                                    <Link to={{
                                        pathname: '/notasAlunos',
                                        state: {homework}
                                    }}>Respostas dos alunos</Link>
                                </div>
                            
                            </li>
                        )).reverse()}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Notas;