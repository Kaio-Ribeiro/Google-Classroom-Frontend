import React from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';
import './homeworks.css';

function Homeworks() {
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
                    <button id="btn-criar-cont-turma" name="criarcontturma"> + Criar</button>
                </div>

                <div className="tipo-cont">
                    <a id="tipo-cont-atv" href="">Atividade</a>
                    <br/>
                    <a id="tipo-cont-mater" href="">Material</a>
                </div>

                <div className="atvidades">
                    <div className="title-atv">Atividades</div>

                    <div className="list-atv">


                    </div>
                </div>

                <div className="materiais">
                    <div className="title-mater">Materiais</div>

                    <div className="list-mater">

                        
                    </div>
                </div>
            </div>
            
            <script src="listener-homeworks.js"></script>
        </div>
    )
}

export default Homeworks