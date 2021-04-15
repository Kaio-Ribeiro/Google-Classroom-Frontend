import React, { useState } from 'react'
import {useLocation} from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './Create_Homework.css'

function Create_Homework() {
    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [fullPoints, setFullPoints] = useState('')
    const [dateLimit, setDateLimit] = useState('')

    const classroom = JSON.parse(localStorage.getItem('classroom'));
    const classID = localStorage.getItem('class_id')
    const userID = localStorage.getItem('userID')
    const [files, setFiles] = useState([])
    const history = useHistory();

    function handleSelectFiles(event) {
        if(!event.target.files) {
            return;
        }

        const selectedFiles = Array.from(event.target.files)
        setFiles(selectedFiles)
    }

    async function handleCreateHomework(event) {
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
            if (title === '' || description === '') {
                alert('Preencha todos os dados!')
                
            }else {
                await api.post('/homeworks', data, {
                    headers: {
                        Authorization: userID
                    }
                })
        
                alert('Atividade criada!')
                history.push('/homeworks');
            }

        }catch(err) {
            alert('Erro ao criar atividade')
        }
    }
    return (
        <div className="Body-Create_atividade">
            <div className="menu-create-atividades">
            
                <div className="part1-create-atv">
                    
                    <Link className="close-create-atv" to="/homeworks">
                        X
                    </Link>

                    <label className="label-atv">Atividade</label>
                </div>

                <div className="create-new-atv">
                    <button className="btn-create-atv" type="submit" onClick={handleCreateHomework}>Criar Atividade</button>
                </div>

            </div>

            <div className="navegacao-create-atv">
                <form className="form-new-atv">
                    <div className="info-atv1">
                        <input type="text" id="title-new-atv" placeholder="Titulo" name="tAtv"
                            value={title} onChange={e => setTitle(e.target.value)}
                        /> <br/>

                        <textarea 
                            type="text" 
                            id="description-new-atv" 
                            name="dAtv" 
                            placeholder="Instruções"
                            value={description} 
                            onChange={e => setDescription(e.target.value)} 
                        >
                        </textarea> <br/>
                        <div className="doc-atv">
                            <input type="file" multiple onChange={handleSelectFiles} id="anexar-doc-atv[]" name="doc-atv"></input>
                        </div>
                    </div>

                    <div className="info-atv2">

                        <label className="pontMax">Pontuação Máxima</label> <br/>
                        <input type="text" name="pMaxAtv" id="pont-max"
                            value={fullPoints} onChange={e => setFullPoints(e.target.value)}
                        /> <br/>

                        <label className="dataEnt">Data de Entrega</label> <br/>
                        <input type="date" id="data-ent" name="dataEntrega" value=""
                            value={dateLimit} onChange={e => setDateLimit(e.target.value)}
                        />

                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Create_Homework
