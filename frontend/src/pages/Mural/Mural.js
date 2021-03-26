import React from 'react';
import {useLocation} from "react-router-dom";

import './mural.css';

function Mural() {
    const location = useLocation();
    console.log(location.state);

    return (
        <div>
            <div className="menu-suspenso">

                <div className="part1">
                    
                    <a className="turmas-menu" href="">
                        Turmas
                    </a>

                </div>

                <div className="list-names-center">
                    <div className="item-1">
                    <a id="mural-menu" href="">Mural</a>
                    </div>

                    <div className="item-2">
                    <a id="atividades-menu" href="">Atividades</a>
                    </div>

                    <div className="item-3">
                    <a id="pessoas-menu" href="">Pessoas</a>
                    </div>

                    <div className="item-4">
                    <a id="notas-menu" href="">Notas</a>
                    </div>
                </div>


                <div className="logout-mural">
                    <button className="btn-logout-menu-suspenso">Logout</button>
                </div>
                
                </div>
            
            <div className="navegacao">
                <div className="container-mural">

                    <div className="text-container-one">
                    <h1 className="nome-turma-mural">{location.state.title}</h1>
                    <h3 className="codigo">Código da turma: {location.state.id}</h3>
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