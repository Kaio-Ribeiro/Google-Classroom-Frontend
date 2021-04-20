import React, { useState } from 'react'
import {useLocation} from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './Student_Response.css'

function Student_Response(){
  return(
      <div className="Body-student-response">

          <div class="menu-inforesponse">
           
              <div class="part1-inforesponse">
                    <a class="back-inforesponse" href=""> X </a>
              </div>

              <div class="list-names-inforesponse">
                  <div class="item-1-inforesponse">
                    <a id="instru-inforesponse" href="">Resposta do Aluno</a>
                  </div>
              </div>

           </div>

           <div class="navegacao-inforesponse">

              <div class="d1ni">
                <button id="btn-devolve-nota" name="devolve-nota">Devolver</button>
                <label id="pm-atv">Pontuação Máxima:</label>
                <input type="text" id="pm-atvr"/>


              </div>

              <div class="d2ni">
                <p id="title-aluno-response">Aluno:</p><br></br>
                <p id="nome-aluno-response">EX: Kaio (tirar isso aqui depois)</p>

                <p id="title-nota-response">Nota:</p><br></br>
                <input type="text" id="nota-response"/>

              </div>

              <div class="d3ni">
                <h2 id="title-atvr">Titulo da atv aqui (substituir pelo titulo da atividade)</h2>
                <div id="des-atvr">Descrição da atv aqui (substituir pela descriçaõ da atv)</div>

                <p id="title-anxr">Respostas Anexadas:</p>

                <div id="list-anxr">

                </div>
              </div>

              <div class="d4ni">

                <input type="text" id="ent-coment-infores" name="coment-infores" placeholder="Adicionar comentário particular..."/>

                <button type="button" id="btn-postcoment-res">Postar</button>
                
                <div class="listcoment-infores">
                  
                </div>
                
              </div>
           </div>

      </div>
  )
}

export default Student_Response;