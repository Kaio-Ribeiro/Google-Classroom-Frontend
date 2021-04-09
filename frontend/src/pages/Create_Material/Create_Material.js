import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Create_Material.css'
import api from '../../services/api';

function Create_Material() {
    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('')
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

    async function handleCreateMaterial(event) {
        event.preventDefault()

        const data = new FormData()
        data.append('title',title)
        data.append('description', description)
        data.append('classID', classID)

        files.forEach(file => {
            data.append('files', file)
        })

        try{
            if (title === '' || description === '') {
                alert('Preencha todos os dados!')
                
            }else {
                await api.post('/materials', data, {
                    headers: {
                        Authorization: userID
                    }
                })
        
                alert('Material postado!')
                history.push('/homeworks');

            }

        }catch(err) {
            alert('Erro ao postar material')
        }
    }
    
    return(
        <div className="Body-Create_Material">
            <div className="menu-create-material">
                
                <div className="part1-create-mat">
                   
                    <Link className="close-create-mat" to="/homeworks">
                        X
                    </Link>

                    <label className="label-mat">Material</label>
                </div>

                
                <div className="create-new-mat">
                    <button className="btn-create-mat " type="submit" type="submit" onClick={handleCreateMaterial}>Postar</button>
                </div>

            </div>



            <div className="navegacao-create-mat">
                <form className="form-new-mat">
                <div className="info-mat1">
                    <input 
                        type="text" id="title-new-mat" 
                        placeholder="Titulo" 
                        name="tMat" 
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                    /> 

                    <textarea 
                        type="text" 
                        id="description-new-mat" 
                        name="dMat" 
                        placeholder="Descrição"
                        value={description} 
                        onChange={e => setDescription(e.target.value)} 
                    >
                    </textarea> 

                    <input className="files-material" type="file" multiple onChange={handleSelectFiles} ></input>

                </div>
                </form>
            </div>




        </div>
    )
}

export default Create_Material