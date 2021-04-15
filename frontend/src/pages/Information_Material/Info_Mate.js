import React, { useState } from 'react'
import {useLocation} from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './Info_Mate.css'

function Information_Material() {
    const history = useHistory()
    const location = useLocation();
    const classID = localStorage.getItem('class_id')
    const material = location.state.material

    async function handleEditMaterial(material) {
        history.push({
            pathname: '/editMaterial',
            state: {material}
        })
    }

    async function handleDeleteMaterial(id) {
        try {
            if (window.confirm('Quer mesmo deletar esse material?')) {
                await api.delete(`/materials/${id}`, {
                    headers: {
                        Authorization: classID,
                    }
                })

                alert('Deletado com sucesso.')

                history.push('/materials')

              }
        } catch (err) {
            alert('Erro ao deletar, tente novamente.')
        }
    }

    return (
        <div className="Body-InfoMate">
          
          <div class="menu-infomate">
           
              <div class="part1-infomate">
                   <Link class="back-infomate" to="/materials"> Voltar </Link>
              </div>

              <div class="list-names-infomate">
                  <div class="item-1-infomate">
                    <a id="instru-infomate" href="">Instruções</a>
                  </div>
              </div>

              <div class="buttons-infomate">
                   <button class="btn-edit-mate" onClick={() => handleEditMaterial(material)}>Editar</button>
                   <button class="btn-excl-mate" onClick={() => handleDeleteMaterial(material.id)}>Excluir</button>
              </div>

            </div>
            
            <div class="navegacao-infomate">

                <div class="c1mate">

                      <div class="div1-c1mate">
                            <h2 class="title-infomate">{material.title}</h2>
                      </div>

                      <div class="div2-c1mate">
                            <p id="descri-infomate">{material.description}</p>
                      </div>

                      <div class="div3-c1mate">
                          Anexos 
                      </div>

                </div>

                <div class="c2mate">
                    <p id="title-coment-mate">Comentários da turma</p>

                    <input type="text" id="ent-coment-infomate" name="coment-infomate" placeholder="Adicionar comentário para a turma..."/>

                    <button type="button" id="btn-postcoment-infomate">Postar</button>
                </div>

                <div class="c3-listcoment-infomate">
                  
                </div>

            </div>

        </div>
    )
}

export default Information_Material;