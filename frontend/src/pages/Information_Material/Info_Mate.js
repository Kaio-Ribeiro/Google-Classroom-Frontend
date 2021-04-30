import React, { useState } from 'react'
import {useLocation} from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import anx from '../../images/anx.png';
import api from '../../services/api';

import './Info_Mate.css'

function Information_Material() {
    const history = useHistory()
    const location = useLocation();
    const classID = localStorage.getItem('class_id')
    const material = location.state.material
    const userID = localStorage.getItem('userID')
    const [comments,setComments] = useState([])
    const [check, setCheck] = useState(false)
    const [message, setMessage] = useState('')

    async function handleComments(id) {
        const response = await api.get('/comment', {
            headers: {
                Authorization: id
            }
        })

        setComments(response.data)
        handleOpenComments()
    }

    async function handleCreateComment(id) {
        const data = {user_id: userID, comment: message}

        try{
            if (message === '') {
                alert('Preencha o campo de comentários!')
                
            }else {
                await api.post('/comment' , data, {
                    headers: {
                        Authorization: id
                    }
                })
        
                alert('Comentário adicionado!')
                setMessage('');
            }
      
          }catch(err) {
              alert('Erro ao adicionar comentário')
          }
          handleComments(id)
    }

    async function handleDeleteComment(comment) {

        try{
            await api.delete(`/comment/${comment.id}`)
    
            alert('Comentário deletado!')
            handleComments(comment.content_id)

          }catch(err) {
              alert('Erro ao deletar comentário')
          }
    }

    function handleOpenComments(){
        setCheck(true)
    };
    
    function handleCloseComments() {
        setCheck(false);
    };

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

                      <div class="anxList">
                            {material.attachments !== []?
                                material.attachments.map(attachment => (
                                    <div>
                                        <img id="imAnx" src={anx}/>
                                        <button id="anxItem" onClick={()=> window.open(`http://localhost:3333/uploads/${attachment.path}`, "_blank")}>{attachment.path}</button> <br></br>
                                        <span id="esp">{attachment.type}</span>
                                    </div>
                                ))
                            :null}
                        </div>

                </div>

                <div class="c2mate">
                    <p id="title-coment-mate">Comentários da turma</p>

                    <input 
                        type="text" 
                        id="ent-coment-infomate" 
                        name="coment-infomate" 
                        placeholder="Adicionar comentário para a turma..."
                        value={message} 
                        onChange={e => setMessage(e.target.value)}
                    />

                    <button type="button" id="btn-postcoment-infomate" onClick={() => handleCreateComment(material.id)}>Postar</button>
                </div>

                <button id="todos-coment-infoMat" onClick={() => handleComments(material.id)}>Visualizar todos os comentários</button>
                <div class="c3-listcoment-infomate">
                    <dialog className="dialogComment" open={check}>
                        {comments.map(comment => (
                            <div className="div-comment">
                                <strong id="comments-strong">{comment.user_name}</strong>
                                {comment.user_id == userID? 
                                    <button className="deleteComment" onClick={() => handleDeleteComment(comment)}>Excluir</button>
                                : null}
                                <p id="comments-paragraph">Comentário postado em: {comment.hours} {comment.day}/{comment.month}/{comment.year}</p>
                                <p id="comments-message">{comment.message}</p>
                                
                            </div>
                        ))}
                        <button id="close-coment" onClick={() => handleCloseComments()}>Ocultar todos os comentários</button>
                    </dialog>
                </div>

            </div>

        </div>
    )
}

export default Information_Material;