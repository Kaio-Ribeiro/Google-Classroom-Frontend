import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api.js';
import './login.css';
import '../checkbox.js'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    async function handleLogin(e) {
        e.preventDefault();

        const data = {email, password}

        try {
            const response = await api.post('sessions', data)

            localStorage.setItem('userID', response.data.id)
            localStorage.setItem('userEmail', email)

            history.push('/dashboard');

        } catch (err) {
            alert("Falha no login, tente novamente")
        }
    }

    return (
        <div id="body-login">
            <h1 className="title"> GOOGLE SALA DE AULA</h1>

            <div className="login">
                <div className="content-w">
                    <h1>Fazer Login</h1>
                    <h3>Use sua conta do Google</h3>

                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="name" 
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)} 
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="password" 
                                name="name" 
                                placeholder="Digite sua senha" 
                                id="pass"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="user-viewpass">
                             <input type="checkbox" name="checkbox" value="value" id="check"/> <label>Mostrar senha</label>
                        </div>

                        <div className="create-cont"> 
                            <Link to="/register">Criar conta</Link>
                        </div>

                        <button className="btn-logar" type="submit">Entrar</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;