import React from 'react';
import {useLocation} from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';

import './mural.css';

function Mural() {
    const  history = useHistory()
    const location = useLocation();
    const classroom = JSON.parse(localStorage.getItem('classroom'));

    function logout() {
        history.push('/');
    }

    return (
        <div>
            <div className="menu-suspenso">

                <div className="part1">
                    
                    <Link className="turmas-menu" to="/dashboard">
                        Turmas
                    </Link>

                </div>

                <div className="list-names-center">
                    <div className="item-1">
                    <a id="mural-menu" href="">Mural</a>
                    </div>

                    <div className="item-2">
                    <a id="atividades-menu" href="">Atividades</a>
                    </div>

                    <div className="item-3">
                        <Link id="pessoas-menu" to="/persons">Pessoas</Link>
                    </div>

                    <div className="item-4">
                    <a id="notas-menu" href="">Notas</a>
                    </div>
                </div>


                <div className="logout-mural">
                    <button className="btn-logout-menu-suspenso" onClick={logout}>Logout</button>
                </div>
                
                </div>
            
            <div className="navegacao">
                <div className="container-mural">

                    <div className="text-container-one">
                    <h1 className="nome-turma-mural">{classroom.title}</h1>
                    <h3 className="codigo">Código da turma: {classroom.code}</h3>
                    </div>
                </div>


                <div className="container-four">
                    <p className="text-comunic">Comunique-se com sua turma aqui !</p>

                    <textarea id="descri-postagem" placeholder="Escreva um aviso para sua turma"></textarea>

                    <button id="anexar-doc-mural" name="doc-mural">Adicionar Arquivos</button>

                    <button id="postar-mural" name="postagem-mural">Postar</button>


                </div>

                <div className="mural-postagens"></div>

            </div>
        </div>
    )
}

export default Mural;