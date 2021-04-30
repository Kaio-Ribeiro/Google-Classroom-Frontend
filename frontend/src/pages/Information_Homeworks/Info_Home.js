import React, { useState } from 'react'
import {useLocation} from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import anx from '../../images/anx.png';

import './Info_Home.css'

function Information_Homework() {
    const history = useHistory()
    const location = useLocation();
    const classID = localStorage.getItem('class_id')
    const homework = location.state.homework
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

    async function handleEditHomework(homework) {
        history.push({
            pathname: `/editHomework/${homework.id}`,
            state: {homework}
        })
    }

    async function handleDeleteHomework(id) {
        try {
            if (window.confirm('Quer mesmo deletar essa atividade?')) {
                await api.delete(`/homeworks/${id}`, {
                    headers: {
                        Authorization: classID,
                    }
                })

                alert('Deletado com sucesso.')

                history.push('/homeworks')

              }
        } catch (err) {
            alert('Erro ao deletar, tente novamente.')
        }
    }

    return (
        <div className="Body-InfoHome">
          
          <div class="menu-infohome">
           
              <div class="part1-infohome">
                   <Link class="back-infohome" to="/homeworks"> Voltar </Link>
              </div>

              <div class="list-names-infohome">
                  <div class="item-1-infohome">
                    <a id="instru-infohome" href="">Instruções</a>
                  </div>
              </div>

              <div class="buttons-infohome">
                   <button class="btn-edit-home" onClick={() => handleEditHomework(homework)}>Editar</button>
                   <button class="btn-excl-home" onClick={() => handleDeleteHomework(homework.id)}>Excluir</button>
              </div>

            </div>
            
            <div class="navegacao-infohome">

                <div class="c1">

                      <div class="div1-c1">
                            <h2 class="title-infohome">{homework.title}</h2>
                      </div>

                      <div class="div2-c1">
                            <p id="pmax-ih"> {homework.fullPoints} pontos</p>
                            <p id="dentrega-ih">Data Entrega: {homework.dayLimit}/{homework.monthLimit}/{homework.yearLimit}</p>
                      </div>

                      <div class="div3-c1">
                          <p id="descri-infohome">{homework.description}</p>
                      </div>

                      <div class="div4-c1">
                          Anexos 
                      </div>

                      <div class="anxList">
                            {homework.attachments !== []?
                                homework.attachments.map(attachment => (
                                    <div>
                                        <img id="imAnx" src={anx}/>
                                        <button id="anxItem" onClick={()=> window.open(`http://localhost:3333/uploads/${attachment.path}`, "_blank")}>{attachment.path}</button> <br></br>
                                        <span id="esp">{attachment.type}</span>
                                    </div>
                                ))
                            :null}
                        </div>

                </div>

                <div class="c2">
                    <p id="title-coment">Comentários da turma</p>

                    <input 
                        type="text" 
                        id="ent-coment-infohome" 
                        name="coment-infohome" 
                        placeholder="Adicionar comentário para a turma..."
                        value={message} 
                        onChange={e => setMessage(e.target.value)}
                    />

                    <button type="button" id="btn-postcoment-infohome" onClick={() => handleCreateComment(homework.id)}>Postar</button>
                </div>

                <button id="todos-coment-infoHome" onClick={() => handleComments(homework.id)}>Visualizar todos os comentários</button>
                <div class="c3-listcoment-infohome">
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

export default Information_Homework
