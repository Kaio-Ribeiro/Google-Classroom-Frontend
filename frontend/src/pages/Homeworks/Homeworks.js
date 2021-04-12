import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom';
import './homeworks.css';

function Homeworks() {
    const [homeworks, setHomeworks] = useState([])
    const classID = localStorage.getItem('class_id')
    const history = useHistory()

    function showDiv() {
        let btnCriarContTurma = document.getElementById("btn-criar-cont-turma");
        let divTipoConteudo = document.getElementsByClassName("tipo-cont")[0];

        if(divTipoConteudo.style.display == "block"){
            divTipoConteudo.style.display="none"
        }

        else{
            divTipoConteudo.style.display="block" 
        }
    }

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
            <div className="menu-suspenso-atividades">
                <div className="part1-atividades">
                    
                    <a className="turmas-menu-atividades" href="">
                        Turmas
                    </a>

                </div>

                <div className="list-names-center-atividades">
                    <div className="item-1-atividades">
                        <Link id="mural-menu-atividades" to="/mural">Mural</Link>
                    </div>

                    <div className="item-2-atividades">
                        <Link id="atividades-menu-atividades" to="/homeworks">Atividades</Link>
                    </div>

                    <div className="item-3-atividades">
                        <Link id="pessoas-menu-atividades" to="/persons">Pessoas</Link>
                    </div>

                    <div className="item-4-atividades">
                        <a id="notas-menu-atividades" href="">Notas</a>
                    </div>
                </div>

                <div className="logout-atividades">
                    <button className="btn-logout-menu-suspenso-atividades">Logout</button>
                </div>
                
            </div>

            <div className="navegacao-atividades">

                <div className="criar-cont-turma">
                    <button id="btn-criar-cont-turma" name="criarcontturma" onClick={showDiv}> + Criar</button>
                </div>

                <div className="tipo-cont">
                    <Link id="tipo-cont-atv" to="/createHomework">Atividade</Link>
                    <br/>
                    <Link id="tipo-cont-mater" to="/createMaterial">Material</Link>
                </div>

                <div className="atvidades">
                    <div className="title-atv">Atividades</div>

                    <div className="list-atv">
                        <ul>
                            {homeworks.map(homework => (
                                <li key={homework.id}>
                                
                                    <div className="homeworks-listing">
                                        <strong>{homework.title}</strong>
                                        <p className='date-time'>Item postado em: {homework.hours} {homework.day}/{homework.month}/{homework.year}</p>
                                        
                                        <p className='delivery-date'>Data de entrega: {homework.hours} {homework.dayLimit}/{homework.monthLimit}/{homework.yearLimit}</p>
                                        <p className='full-points'>Nota Máxima: {homework.fullPoints}</p>
                                        <p>{homework.description}</p>
                                        <Link to={{
                                            pathname: '/informationHomework',
                                            state: [{id: 1, name: 'Ford', color: 'red'}]
                                        }}>Ver atividade</Link>
                                    </div>
                                
                                </li>
                            )).reverse()}
                        </ul>
                    </div>
                </div>

                <div className="materiais">
                    <div className="title-mater">Materiais</div>

                    <div className="list-mater">

                        
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Homeworks