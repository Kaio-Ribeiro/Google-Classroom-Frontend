import React from 'react';
import '../styles/pages/register.css';

function Login() {
    return (
        <div class="register">
            <div class="content-wraper">
                <h1>Crie sua conta</h1>
                <h3>Faça seu cadastro para entrar na plataforma</h3>

                <form>
                    <div class="form-group">
                        <input type="text" name="name" placeholder="Nome Completo" />
                    </div>

                    <div class="form-group">
                        <input type="email" name="name" placeholder="E-mail" />
                    </div>

                    <div class="form-group-password">
                        <input type="password" name="name" placeholder="Senha" />
                        <input type="password" name="name" placeholder="Confirmar senha" />
                    </div>

                    <div class="viewpass">
                        <label> <input type="checkbox" name="checkbox" value="value"/> Mostrar senha</label>
                    </div>

                    <div class="create-cont"> 
                        <a href="#">Faça login em vez disso</a>
                    </div>

                    <button class="btn-logar" type="button">Entrar</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Login;