import React from 'react'
import './Create_Material.css'

function Create_Material() {
    return(
        <div className="Body-Create_Material">
            <div class="menu-create-material">
                
                <div class="part1-create-mat">
                   
                    <a class="close-create-mat" href="">
                        X
                    </a>

                    <label class="label-mat">Material</label>
                </div>

                
                <div class="create-new-mat">
                    <button class="btn-create-mat " type="submit">Postar</button>
                </div>

            </div>



            <div class="navegacao-create-mat">
                <form class="form-new-mat">
                <div class="info-mat1">
                    <input type="text" id="title-new-mat" placeholder="Titulo" name="tMat"/> 

                    <textarea type="text" id="description-new-mat" name="dMat" placeholder="Descrição (opcional)"></textarea> 

                    <button id="anexo-new-mat" onClick="" >Adicionar Arquivos</button>

                </div>
                </form>
            </div>




        </div>
    )
}

export default Create_Material