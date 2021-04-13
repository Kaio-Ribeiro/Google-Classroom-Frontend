import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom';
import './materials.css';

function Materials() {
    const [materials, setMaterials] = useState([])
    const classID = localStorage.getItem('class_id')
    const history = useHistory()

    function logout() {
        history.push('/');
      
    }

    function navigateToCreateMaterials() {
        history.push('/createMaterial'); 
    }

    useEffect(() => {
        api.get('materials', {
        headers: {
            Authorization: classID,
        }
        },{

        }).then(response => {
            setMaterials(response.data)
        })
    }, [classID])

    return (
        <div>
            <div className="menu-suspenso-materiais">
                <div className="part1-materiais">
                    
                    <Link className="turmas-menu-materiais" to="/dashboard">
                        Turmas
                    </Link>

                </div>

                <div className="list-names-center-materiais">
                    <div className="item-1-materiais">
                        <Link id="mural-menu-materiais" to="/mural">Mural</Link>
                    </div>

                    <div className="item-2-materiais">
                        <Link id="atividades-menu-materiais" to="/homeworks">Atividades</Link>
                    </div>

                    <div className="item-3-materiais">
                        <Link id="materiais-menu-materiais" to="/materials">Materiais</Link>
                    </div>

                    <div className="item-4-materiais">
                        <Link id="pessoas-menu-materiais" to="/persons">Pessoas</Link>
                    </div>

                    <div className="item-5-materiais">
                        <a id="notas-menu-materiais" href="">Notas</a>
                    </div>
                </div>

                <div className="logout-materiais">
                    <button onClick={logout} className="btn-logout-menu-suspenso-materiais">Logout</button>
                </div>
                
            </div>

            <div className="navegacao-materiais">

                <div className="criar-cont-turma">
                    <button id="btn-criar-cont-turma" name="criarcontturma" onClick={navigateToCreateMaterials}> + Criar</button>
                </div>

                <div className="tipo-cont">
                    <Link id="tipo-cont-atv" to="/createHomework">Atividade</Link>
                    <br/>
                    <Link id="tipo-cont-mater" to="/createMaterial">Material</Link>
                </div>

                <div className="materiais">
                    <div className="title-mat">Materiais</div>

                    <div className="list-mat">
                        <ul>
                            {materials.map(material => (
                                <li key={material.id}>
                                
                                    <div className="materials-listing">
                                        <strong>{material.title}</strong>
                                        <p className='date-time'>Item postado em: {material.hours} {material.day}/{material.month}/{material.year}</p>
                                    
                                        <Link to={{
                                            pathname: '/informationMaterial',
                                            state: {material}
                                        }}>Ver atividade</Link>
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

export default Materials