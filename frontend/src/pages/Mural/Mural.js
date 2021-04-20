import React, { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './mural.css';

function Mural() {
    const [description, setDescription] = useState('')
    const [postID, setPostID] = useState()
    const history = useHistory()
    const location = useLocation();
    const classroom = JSON.parse(localStorage.getItem('classroom'));
    const classID = localStorage.getItem('class_id')
    const userID = localStorage.getItem('userID')
    const [posts,setPosts] = useState([])
    const [contents_attachments,setContents_attachments] = useState([])
    const [files, setFiles] = useState([])

    function logout() {
        history.push('/');
    }

    function handleSelectFiles(event) {
        if(!event.target.files) {
            return;
        }

        const selectedFiles = Array.from(event.target.files)
        setFiles(selectedFiles)
    }

    async function handleEditPost(post) {
        const data = new FormData()
        data.append('description', description)
    
        files.forEach(file => {
          data.append('files', file)
        })
    
        try{
          if (description === '') {
              alert('Preencha todos os dados!')
              
          }else {
              await api.put(`/posts/${post.id}`, data)
      
              alert('Postagem editada!')
              setPostID(0);
              setDescription('');
          }
    
        }catch(err) {
            alert('Erro ao editar postagem')
        }
    }

    async function handleCreatePost(event) {
        event.preventDefault()

        const data = new FormData()

        data.append('classID', classID)
        data.append('description', description)

        files.forEach(file => {
            data.append('files', file)
        })

        try{
            if (description === '') {
                alert('Preencha todos os dados!')
                
            }else {
                await api.post('/posts', data, {
                    headers: {
                        Authorization: userID
                    }
                })
        
                alert('Postagem criada!')
            }

        }catch(err) {
            alert('Erro ao criar postagem')
        }
    }

    useEffect(() => {
        api.get('posts', {
        headers: {
            Authorization: classID,
        }
        },{

        }).then(response => {
            setPosts(response.data)
        })
    }, [posts])

    async function handleDeletePost(id) {
        try {
            if (window.confirm('Quer mesmo deletar esse post?')) {
                await api.delete(`/posts/${id}`, {
                    headers: {
                        Authorization: classID,
                    }
                })

                setPosts(posts.filter(post => post.id !== id))

                alert('Deletado com sucesso.')

              }
        } catch (err) {
            alert('Erro ao deletar, tente novamente.')
        }
    }
    
    function handleClickOpen(id){
        setPostID(id)
    };
    
    function handleClose() {
        setPostID(0);
    };


    return (
        <div>
            <div className="menu-suspenso">

                <div className="part1">
                    
                    <Link className="turmas-menu" to="/dashboard">
                        Turmas
                    </Link>

                </div>

                <div className="list-names-center">
                    <div className="item-1">
                        <Link id="mural-menu" to="/mural">Mural</Link>
                    </div>

                    <div className="item-2">
                        <Link id="atividades-menu" to="/homeworks">Atividades</Link>
                    </div>

                    <div className="item-3">
                        <Link id="materiais-menu" to="/materials">Materiais</Link>
                    </div>

                    <div className="item-4">
                        <Link id="pessoas-menu" to="/persons">Pessoas</Link>
                    </div>

                    <div className="item-5">
                        <Link id="notas-menu" to="/notas">Notas</Link>
                    </div>
                </div>


                <div className="logout-mural">
                    <button className="btn-logout-menu-suspenso" onClick={logout}>Logout</button>
                </div>
                
                </div>
            
            <div className="navegacao">
                <div className="container-mural">

                    <div className="text-container-one">
                    <h1 className="nome-turma-mural">{classroom.title}</h1>
                    <h3 className="codigo">Código da turma: {classroom.code}</h3>
                    </div>
                </div>


                <form className="container-four"onSubmit={handleCreatePost}>
                    <p className="text-comunic">Comunique-se com sua turma aqui !</p>

                    <textarea 
                        id="descri-postagem" 
                        placeholder="Escreva um aviso para sua turma"
                        value={description} onChange={e => setDescription(e.target.value)} 
                    >

                    </textarea>

                    <input type="file" multiple onChange={handleSelectFiles} id="anexar-doc-mural1" name="doc-mural"></input>

                    <button type="submit" id="postar-mural" name="postagem-mural">Postar</button>


                </form>

                <div className="mural-postagens">
                    <ul>
                        {posts.map(post => (
                            <li className="li-posts" key={post.id}>

                                {postID == post.id?
                                    <dialog open={true} onClose={handleClose} id="dialogo-edit-post">
                                        <p className="title-editpost">Editar Postagem</p>
                                        <p className="text-comunic-edit">Comunicado:</p>

                                        <textarea 
                                            id="descri-postagem-edit" 
                                            placeholder="Escreva um aviso para sua turma"
                                            defaultValue={post.description}
                                            onChange={e => setDescription(e.target.value)}
                                        >

                                        </textarea>

                                        <div class="anexos-post-edit">
                                            Anexos                
                                        </div>

                                        <input type="file" multiple onChange={handleSelectFiles} id="anexar-doc-mural2" name="doc-mural"></input>

                                        <button onClick={() => handleClose()} id="btn-cancel-edit-post">
                                            Cancelar
                                        </button>
                                        
                                        <button onClick={() => handleEditPost(post)} id="btn-save-edit-post">
                                            Salvar
                                        </button>

                                    </dialog>
                                : null }

                                <div className="posts-listing">
                                    <strong>{post.user_name}</strong>

                                    <button className="btnDelete-mural" onClick={() => handleDeletePost(post.id)} type="button">Excluir</button>
                                   
                                    <button className="btnEditar-mural" onClick={() => handleClickOpen(post.id)} type="button" >Editar</button>
                                    
                                    <p className='date-time'>Item postado em: {post.hours} {post.day}/{post.month}/{post.year}</p>
                                    <p className="scroll-paragraph">{post.description}</p>
                                   
                                    
                                </div>
                            
                            </li>
                        )).reverse()}
                    </ul>
                </div>

            </div>

           
        </div>
    )
}

export default Mural;