import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/login.css';

function Login() {
    return (
        <div id="body-login">
            <h1 className="title"> GOOGLE SALA DE AULA</h1>

            <div className="login">
                <div className="content-w">
                    <h1>Fazer Login</h1>
                    <h3>Use sua conta do Google</h3>

                    <form>
                        <div className="form-group">
                            <input type="email" name="name" placeholder="Digite seu e-mail" />
                        </div>

                        <div className="form-group">
                            <input type="password" name="name" placeholder="Digite sua senha" />
                        </div>

                        <div className="viewpass">
                            <label> <input type="checkbox" name="checkbox" value="value"/> Mostrar senha</label>
                        </div>

                        <div className="create-cont"> 
                            <Link to="/register">Criar conta</Link>
                        </div>

                        <button className="btn-logar" type="button">Entrar</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;