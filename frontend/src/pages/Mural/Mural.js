import React from 'react';

import './mural.css';

function Mural() {
    return (
        <div>
            <div class="menu-suspenso">

                <div class="part1">
                    
                    <a class="turmas-menu" href="">
                        Turmas
                    </a>

                </div>

                <div class="list-names-center">
                    <div class="item-1">
                    <a id="mural-menu" href="">Mural</a>
                    </div>

                    <div class="item-2">
                    <a id="atividades-menu" href="">Atividades</a>
                    </div>

                    <div class="item-3">
                    <a id="pessoas-menu" href="">Pessoas</a>
                    </div>

                    <div class="item-4">
                    <a id="notas-menu" href="">Notas</a>
                    </div>
                </div>


                <div class="logout-mural">
                    <button class="btn-logout-menu-suspenso">Logout</button>
                </div>
                
                </div>
            
            <div class="navegacao">
                <div class="container-mural">

                    <div class="text-container-one">
                    <h1 class="nome-turma-mural">Teste - Print2</h1>
                    <h3 class="codigo">Código da turma:</h3>
                    </div>
                </div>


                <div class="container-four">
                    <p class="text-comunic">Comunique-se com sua turma aqui !</p>

                <textarea id="descri-postagem" placeholder="Escreva um aviso para sua turma"></textarea>

                <button id="anexar-doc-mural" name="doc-mural">Adicionar Arquivos</button>

                <button id="postar-mural" name="postagem-mural">Postar</button>


                </div>

                <div class="mural-postagens"></div>

            </div>
            </div>
    )
}

export default Mural;