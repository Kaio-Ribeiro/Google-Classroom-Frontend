import React, { useState } from 'react'
import {useLocation} from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './Create_atividade.css'

function Create_atividade() {
    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [fullPoints, setFullPoints] = useState('')
    const [dateLimit, setDateLimit] = useState('')

    const classroom = JSON.parse(localStorage.getItem('classroom'));
    const classID = localStorage.getItem('class_id')
    const userID = localStorage.getItem('userID')
    const [files, setFiles] = useState([])

    function handleSelectFiles(event) {
        if(!event.target.files) {
            return;
        }

        const selectedFiles = Array.from(event.target.files)
        setFiles(selectedFiles)
    }

    async function handleCreatePost(event) {
        event.preventDefault()

        const data = new FormData()
        data.append('title',title)
        data.append('fullPoints',fullPoints)
        data.append('description', description)
        data.append('dateLimit',dateLimit)
        data.append('classID', classID)

        files.forEach(file => {
            data.append('files', file)
        })

        try{
            await api.post('/homeworks', data, {
                headers: {
                    Authorization: userID
                }
            })
    
            alert('Postagem criada!')

        }catch(err) {
            alert('Erro ao criar postagem')
        }
    }
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
                    <button class="btn-create-atv" type="submit" onClick={handleCreatePost}>Criar Atividade</button>
                </div>

            </div>

            <div class="navegacao-create-atv">
                <form class="form-new-atv">
                    <div class="info-atv1">
                        <input type="text" id="title-new-atv" placeholder="Titulo" name="tAtv"
                            value={title} onChange={e => setTitle(e.target.value)}
                        /> <br/>

                        <textarea type="text" id="description-new-atv" name="dAtv" placeholder="Instruções (opcional)"
                            value={description} onChange={e => setDescription(e.target.value)}
                        >
                        </textarea> <br/>
                        <div className="doc-atv">
                            <label htmlFor="anexar-doc-atv[]" id="anexo-new-atv" >Adicionar Arquivos</label>
                            <input type="file" multiple onChange={handleSelectFiles} id="anexar-doc-atv[]" name="doc-atv"></input>
                        </div>
                    </div>

                    <div class="info-atv2">

                        <label class="pontMax">Pontuação Máxima</label> <br/>
                        <input type="text" name="pMaxAtv" id="pont-max"
                            value={fullPoints} onChange={e => setFullPoints(e.target.value)}
                        /> <br/>

                        <label class="dataEnt">Data de Entrega</label> <br/>
                        <input type="date" id="data-ent" name="dataEntrega" value=""
                            value={dateLimit} onChange={e => setDateLimit(e.target.value)}
                        />

                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Create_atividade
