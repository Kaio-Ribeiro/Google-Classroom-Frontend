import React, { useState } from 'react'
import {useLocation} from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './Info_Home.css'

function Information_Homework() {
    const location = useLocation();
    console.log(location.state.id)

    return (
        <div className="Body-InfoHome">
          
          <div class="menu-infohome">
           
              <div class="part1-infohome">
                   <a class="back-infohome" href=""> Voltar </a>
              </div>

              <div class="list-names-infohome">
                  <div class="item-1-infohome">
                    <a id="instru-infohome" href="">Instruções</a>
                  </div>
              </div>

              <div class="buttons-infohome">
                   <button class="btn-edit-home">Editar</button>
                   <button class="btn-excl-home">Excluir</button>
              </div>

            </div>
            
            <div class="navegacao-infohome">

                <div class="c1">

                      <div class="div1-c1">
                            <h2 class="title-infohome">Asdfdfg</h2>
                      </div>

                      <div class="div2-c1">
                            <p id="pmax-ih"> 10 pontos</p>
                            <p id="dentrega-ih">Data Entrega: 09/04/2021</p>
                      </div>

                      <div class="div3-c1">
                          <p id="descri-infohome">Descrição Aqui</p>
                      </div>

                      <div class="div4-c1">
                          Anexos aqui
                      </div>

                </div>

                <div class="c2">
                    <p id="title-coment">Comentários da turma</p>

                    <input type="text" id="ent-coment-infohome" name="coment-infohome" placeholder="Adicionar comentário para a turma..."/>

                    <button type="button" id="btn-postcoment-infohome">Postar</button>
                </div>

                <div class="c3-listcoment-infohome">
                  
                </div>

            </div>

        </div>
    )
}

export default Information_Homework
