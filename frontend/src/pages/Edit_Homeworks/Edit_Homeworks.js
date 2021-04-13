import React, { useState, useRoute } from 'react'
import {useLocation} from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './Edit_Home.css'

function Edit_Homework() {
  
  const [title,setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [fullPoints, setFullPoints] = useState('')
  const [dateLimit, setDateLimit] = useState('')

  const history = useHistory()
  const location = useLocation();
  const classID = localStorage.getItem('class_id')
  const userID = localStorage.getItem('userID')
  const homework = location.state.homework

  async function handleEditHomework(event) {
    event.preventDefault()

    const data = new FormData()
    data.append('title',title)
    data.append('fullPoints',fullPoints)
    data.append('description', description)
    data.append('dateLimit',dateLimit)
    data.append('classID', classID)

    try{
      if (title === '' || description === '') {
          alert('Preencha todos os dados!')
          
      }else {
          await api.put('/homeworks', data, {
              headers: {
                  Authorization: userID
              }
          })
  
          alert('Atividade editada!')
          history.push('/informationHomework');
      }

  }catch(err) {
      alert('Erro ao editar atividade')
  }
  }

  return (
      <div className="Body-EditHome">
        <div class="menu-edit-atividades"> 

          <div class="part1-edit-atvd">
              <a class="close-edit-atvd" href="">
                X
              </a>

              <label class="label-edit-atvd">Editar Atividade</label>
          </div>

          <div class="save-edit-atv">
              <button class="btn-save-atvd" type="submit" onClick={handleEditHomework}>Salvar</button>
          </div>

        </div>

        <div class="navegacao-edit-atvd">

          <form class="form-edit-atvd">

            <div class="edit-info1-atvd">
                <input type="text" id="edit-title-atvd" placeholder="Titulo" name="tAtv" defaultValue={homework.title} onChange={e => setTitle(e.target.value)}/> <br/>

                <textarea type="text" id="edit-description-atvd" name="dAtv" placeholder="Instruções (opcional)" defaultValue={homework.description} onChange={e => setDescription(e.target.value)}></textarea> <br/>
                
                <div class="list-anexos-edition">
                  
                </div>

                <button id="anexo-edit-atvd" type="submit">Adicionar Arquivos</button>

            </div>

            <div class="edit-info2-atvd">

                <label class="pont-Max-edition">Pontuação Máxima</label> <br></br>
                <input type="text" name="pMaxAtv" id="pont-max-edition" defaultValue={homework.fullPoints} onChange={e => setFullPoints(e.target.value)}/> <br></br>

                <label class="data-Ent-edition">Data de Entrega</label> <br></br>
                <input type="date" id="data-ent-edition" name="dataEntrega" defaultValue="" onChange={e => setDateLimit(e.target.value)}/>

            </div>

          </form>

        </div>

      </div>

  )
}

export default Edit_Homework
