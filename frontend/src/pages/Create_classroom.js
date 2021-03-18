import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/create_classroom.css';

function Create_classroom() {
    return (
        <div className="body-create-turma">
            <h1 class="title"> GOOGLE SALA DE AULA</h1>

            <div class="container">
            <h1> Criar Turma</h1>

                <div class="content-wraper">
                    <form>
                        <div class="turma-nome">
                            <input type="text" name="name" placeholder="Nome da Turma" />
                        </div>
                        

                        <div class="turma-assunto">
                            <input type="text" name="name" placeholder="Assunto" />
                        </div>

                        
                        <div class="turma-descricao">
                            <input type="textarea" name="name" placeholder="Descrição" />
                        </div>

                        <button class="btn-cancel-turma" type="button">Cancelar</button>
                        <button class="btn-create-turma" type="button">Criar</button>
                    </form>
                </div>
            
            </div> 
        </div>
    )
}

export default Create_classroom;