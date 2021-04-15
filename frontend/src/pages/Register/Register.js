import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api.js';
import './register.css';
import '../checkbox.js'

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        
        const data ={
            name,
            email,
            password,
            confirmedPassword
        }

        try {
            const  response = await api.post('users', data)
            alert("Usuário cadastrado com suscesso")
            history.push('/');
        } catch (err) {
            alert("Erro no cadastro")
        }
    }

    return (
        <div id="body-register">
            <h1 className="title"> GOOGLE SALA DE AULA</h1>

            <div className="register">
                <div className="content-wra">
                    <h1>Crie sua conta</h1>
                    <h3>Faça seu cadastro para entrar na plataforma</h3>

                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Nome Completo" 
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="email" 
                                name="name" 
                                placeholder="E-mail" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group-password">
                            <input 
                                type="password" 
                                name="name" 
                                placeholder="Senha" 
                                id="pass"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <input 
                                type="password" 
                                name="name" 
                                placeholder="Confirmar senha" 
                                id="passConf"
                                value={confirmedPassword}
                                onChange={e => setConfirmedPassword(e.target.value)}
                            />
                        </div>

                        <div className="register-viewpass">
                            <input type="checkbox" name="checkbox" value="value" id="check"/> <label> Mostrar senha</label>
                        </div>

                        <div className="create-cont"> 
                            <Link to="/">Faça login</Link>
                        </div>

                        <button className="btn-criar-user" type="submit">Criar</button>
                        
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Register;