import React from 'react';
import '../styles/pages/login.css';

function Login() {
    return (
        <div class="login">
            <div class="content-wraper">
                <h1>Fazer Login</h1>
                <h3>Use sua conta do Google</h3>

                <form>
                    <div class="form-group">
                        <input type="email" name="name" placeholder="Digite seu e-mail" />
                    </div>

                    <div class="form-group">
                        <input type="password" name="name" placeholder="Digite sua senha" />
                    </div>

                    <div class="viewpass">
                        <label> <input type="checkbox" name="checkbox" value="value"/> Mostrar senha</label>
                    </div>

                    <div class="create-cont"> 
                        <a href="#">Criar conta</a>
                    </div>

                    <button class="btn-logar" type="button">Entrar</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Login;