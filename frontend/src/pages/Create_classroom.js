import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/create_classroom.css';

function Create_classroom() {
    return (
        <div className="container">
            <h1> Criar Turma</h1>

            <div className="criar_turma">
                <div className="content-wraper">
                    <form>
                        <div className=" label-float form-group">
                            <input type="text" name="name" placeholder="Nome da Turma" />
                        </div>
                        

                        <div className="label-float form-group">
                            <input type="text" name="name" placeholder="Assunto" />
                        </div>

                        
                        <div className="label-float form-group">
                            <input type="textarea" name="name" placeholder="Descrição" />
                        </div>
                        <br></br>

                        <button className="button" type="button">Criar</button>
                        <button className="button" type="button">Cancelar</button>
                    </form>
                </div>
            </div>
        </div> 
    )
}

export default Create_classroom;