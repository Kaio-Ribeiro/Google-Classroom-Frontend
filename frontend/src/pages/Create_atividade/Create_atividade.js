import React from 'react'
import './Create_atividade.css'

function Create_atividade() {
    return (
        <div className="Body-Create_atividade">
            <div class="menu-create-atividades">
            
                <div class="part1-create-atv">
                    
                    <a class="close-create-atv" href="">
                        X
                    </a>

                    <label class="label-atv">Atividade</label>
                </div>

                <div class="create-new-atv">
                    <button class="btn-create-atv" type="submit">Criar Atividade</button>
                </div>

            </div>

            <div class="navegacao-create-atv">
                <form class="form-new-atv">
                    <div class="info-atv1">
                        <input type="text" id="title-new-atv" placeholder="Titulo" name="tAtv"/> <br/>

                        <textarea type="text" id="description-new-atv" name="dAtv" placeholder="Instruções (opcional)"></textarea> <br/>

                        <button id="anexo-new-atv" >Adicionar Arquivos</button>

                    </div>

                    <div class="info-atv2">

                        <label class="pontMax">Pontuação Máxima</label> <br/>
                        <input type="text" name="pMaxAtv" id="pont-max"/> <br/>

                        <label class="dataEnt">Data de Entrega</label> <br/>
                        <input type="date" id="data-ent" name="dataEntrega" value=""/>

                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Create_atividade
