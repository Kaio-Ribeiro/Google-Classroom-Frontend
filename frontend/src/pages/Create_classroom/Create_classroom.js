import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './create_classroom.css';
import api from '../../services/api.js';

function Create_classroom() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [subject, setSubject] = useState('');

    const history = useHistory();

    async function handleCreateClassroom(e) {
        e.preventDefault();

        const userID = localStorage.getItem('userID')
        const data = {userID, title, description, subject, avatar: 'img-fake'}

        try {
            const response = await api.post('classrooms', data)
            console.log(userID)

            localStorage.setItem('class_id', response.data)
            
            alert(`Turma criada com suscesso`)

            history.push('/mural');

        } catch (err) {
            alert("Falha ao criar turma, tente novamente")
        }
    }

    function navigateToDashboard() {
        history.push('/dashboard');
    }

    return (
        <div className="body-create-turma">
            <h1 class="title"> GOOGLE SALA DE AULA</h1>

            <div class="turma-container">
            <h1> Criar Turma</h1>

                <div class="content-turma">
                    <form onSubmit={handleCreateClassroom}>
                        <div class="turma-nome">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Nome da Turma"
                                value={title}
                                onChange={e => setTitle(e.target.value)} 
                            />
                        </div>
                        

                        <div class="turma-assunto">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Assunto"
                                value={subject}
                                onChange={e => setSubject(e.target.value)} 
                            />
                        </div>

                        
                        <div class="turma-descricao">
                            <input 
                                type="textarea" 
                                name="name" 
                                placeholder="Descrição"
                                value={description}
                                onChange={e => setDescription(e.target.value)} 
                            />
                        </div>

                        <button class="btn-cancel-turma" type="button" onClick={navigateToDashboard}>Cancelar</button>
                        <button class="btn-create-turma" type="submit">Criar</button>
                    </form>
                </div>
            
            </div> 
        </div>
    )
}

export default Create_classroom;