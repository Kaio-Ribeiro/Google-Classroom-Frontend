import React, { useState } from 'react'
import {useLocation} from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './Edit_Mate.css'

function Edit_Material() {
  const history = useHistory()
  const location = useLocation();
  const material = location.state.material
  const [title,setTitle] = useState(material.title)
  const [description, setDescription] = useState(material.description)
  const [files, setFiles] = useState([])

  function handleSelectFiles(event) {
    if(!event.target.files) {
        return;
    }

    const selectedFiles = Array.from(event.target.files)
    setFiles(selectedFiles)
  }

  async function handleEditMaterial() {
    const data = new FormData()
    data.append('title',title)
    data.append('description', description)

    files.forEach(file => {
      data.append('files', file)
    })

    try{
      if (title === '' || description === '') {
          alert('Preencha todos os dados!')
          
      }else {
          await api.put(`/materials/${material.id}`, data)
  
          alert('Material editado!')
          history.push('/materials');
      }

    }catch(err) {
        alert('Erro ao editar material')
    }
  }

  return (
      <div className="Body-EditMate">

        <div class="menu-edition-material">

          <div class="part1-mat-edition">
              <Link class="close-edition-mat" to="/materials">
                X
              </Link>

              <label className="label-edition-mat">Edição de Material</label>
          </div>

          <div class="edition-mat">
            <button class="btn-save-mat" onClick={handleEditMaterial}>Salvar</button>
          </div>

        </div>

        <div class="naveg-edition-mat">
          
          <form class="form-edition-mat">
            
            <div class="info1-edition-mat">
                <input type="text" id="edition-title-mat" placeholder="Titulo" name="tMat" defaultValue={material.title} onChange={e => setTitle(e.target.value)}/> <br></br>

                <textarea type="text" id="description-edition-mat" name="dMat" placeholder="Descrição" defaultValue={material.description} onChange={e => setDescription(e.target.value)}></textarea> <br></br>
                
                <div class="list-editition-Mat">
                  
                </div>

                <input id="edition-anexos-mat" type="file" multiple onChange={handleSelectFiles}></input>

            </div>

          </form>

        </div>

      </div>
  )
}

export default Edit_Material