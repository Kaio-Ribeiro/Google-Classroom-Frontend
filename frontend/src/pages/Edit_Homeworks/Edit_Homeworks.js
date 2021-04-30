import React, { useState, useEffect, useRoute } from 'react'
import {useLocation} from "react-router-dom";
import { Link, useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';
import anx from '../../images/anx.png';

import './Edit_Home.css'

function Edit_Homework() {
  const location = useLocation();
  const { id } = useParams();
  //const [homework, setHomework] = useState({})
  const homework = location.state.homework
  const [files, setFiles] = useState([])

  const history = useHistory()
  const classID = localStorage.getItem('class_id')
  const userID = localStorage.getItem('userID')

  /*async function handleDeleteAttachment(id) {

        try{
            await api.delete(`/attachment/${id}`)
    
            alert('Anexo deletado!')

          }catch(err) {
              alert('Erro ao deletar anexo')
          }
    }*/

  function handleSelectFiles(event) {
    if(!event.target.files) {
        return;
    }

    const selectedFiles = Array.from(event.target.files)
    setFiles(selectedFiles)
  }

  async function handleEditHomework(event) {
    event.preventDefault()
    const data = new FormData()
    data.append('title',title)
    data.append('fullPoints',fullPoints)
    data.append('description', description)
    data.append('dateLimit',dateLimit)
    data.append('user_id', userID)

    files.forEach(file => {
      data.append('files', file)
    })

    try{
      if (title === '' || description === '') {
          alert('Preencha todos os dados!')
          
      }else {
          await api.put(`/homeworks/${homework.id}`, data)
          //alert(dateLimit)
          alert('Atividade editada!')
          history.push('/homeworks');
      }

    }catch(err) {
        alert('Erro ao editar atividade')
    }
  }

  /*useEffect(() => {
        api.get(`especific-homework/${id}`, {

        }).then(response => {
            setHomework(response.data)
        })
    }, [id])*/

  const [title,setTitle] = useState(homework.title)
  const [description, setDescription] = useState(homework.description)
  const [fullPoints, setFullPoints] = useState(homework.fullPoints)
  const [dateLimit, setDateLimit] = useState(homework.dateLimit)

  console.log(homework)

  return (
      <div className="Body-EditHome">
        <div class="menu-edit-atividades"> 

          <div class="part1-edit-atvd">
              <Link class="close-edit-atvd" to="/homeworks">
                X
              </Link>

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

                <input id="anexo-edit-atvd" type="file" multiple onChange={handleSelectFiles}></input>

            </div>

            <div class="edit-info2-atvd">

                <label class="pont-Max-edition">Pontuação Máxima</label> <br></br>
                <input type="text" name="pMaxAtv" id="pont-max-edition" defaultValue={homework.fullPoints} onChange={e => setFullPoints(e.target.value)}/> <br></br>

                <label class="data-Ent-edition">Data de Entrega</label> <br></br>
                <input type="date" id="data-ent-edition" name="dataEntrega" defaultValue={homework.dateLimit} onChange={e => setDateLimit(e.target.value)}/>

            </div>

          </form>

        </div>

      </div>

  )
}

export default Edit_Homework
