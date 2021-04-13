import React, { useState } from 'react'
import {useLocation} from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './Edit_Mate.css'

function Edit_Material() {
  return (
      <div className="Body-EditMate">

        <div class="menu-edition-material">

          <div class="part1-mat-edition">
              <a class="close-edition-mat" href="">
                X
              </a>

              <label class="label-edition-mat">Edição de Material</label>
          </div>

          <div class="edition-mat">
            <button class="btn-save-mat">Salvar</button>
          </div>

        </div>

        <div class="naveg-edition-mat">
          
          <form class="form-edition-mat">
            
            <div class="info1-edition-mat">
                <input type="text" id="edition-title-mat" placeholder="Titulo" name="tMat"/> <br></br>

                <textarea type="text" id="description-edition-mat" name="dMat" placeholder="Descrição (opcional)"></textarea> <br></br>
                
                <div class="list-editition-Mat">
                  
                </div>

                <button id="edition-anexos-mat" type="submit">Adicionar Arquivos</button>

            </div>

          </form>

        </div>

      </div>
  )
}

export default Edit_Material