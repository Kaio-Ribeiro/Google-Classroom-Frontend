import React, { useState } from 'react'
import {useLocation} from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './Student_Response.css'

function Student_Response(){
  const location = useLocation()
  const history = useHistory()
  const response = location.state.response
  const [note, setNote] = useState('')

  async function handleGiveNote(event) {
    event.preventDefault()
    const data = {note}
    console.log(response)

    try{
        if (note === '') {
            alert('Preencha todos os dados!')
            
        }else {
            await api.put(`/responses/${response.id}`, data)
    
            alert('Nota devolvida!')
            history.goBack()

        }

    }catch(err) {
        alert('Erro ao devolver nota')
    }
}

  return(
      <div className="Body-student-response">

          <div class="menu-inforesponse">
           
              <div class="part1-inforesponse">
                    <Link class="back-inforesponse" to="/notas"> X </Link>
              </div>

              <div class="list-names-inforesponse">
                  <div class="item-1-inforesponse">
                    <a id="instru-inforesponse" href="">Resposta do Aluno</a>
                  </div>
              </div>

           </div>

           <div class="navegacao-inforesponse">

              <div class="d1ni">
                <button id="btn-devolve-nota" name="devolve-nota" onClick={handleGiveNote}>Devolver</button>
                <label id="pm-atv">Nota:</label>
                <input 
                  type="text" 
                  id="pm-atvr" 
                  value={note} 
                  onChange={e => setNote(e.target.value)}
                />


              </div>

              <div class="d2ni">
                <p id="title-aluno-response">Aluno:</p><br></br>
                <p id="nome-aluno-response">{response.name}</p>

                <p id="title-nota-response">Pontuação Atual:</p><br></br>
                <p id="nota-response">{response.note}</p>

              </div>

              <div class="d3ni">
                <h2 id="title-atvr">{response.title}</h2>
                <div id="des-atvr">{response.description}</div>

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