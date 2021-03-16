import React from 'react';
import '../styles/pages/register.css';

function Login() {
    return (
        <div>
            <h1 className="title"> GOOGLE SALA DE AULA</h1>

            <div className="register">
                <div className="content-wraper">
                    <h1>Crie sua conta</h1>
                    <h3>Faça seu cadastro para entrar na plataforma</h3>

                    <form>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Nome Completo" />
                        </div>

                        <div className="form-group">
                            <input type="email" name="name" placeholder="E-mail" />
                        </div>

                        <div className="form-group-password">
                            <input type="password" name="name" placeholder="Senha" />
                            <input type="password" name="name" placeholder="Confirmar senha" />
                        </div>

                        <div className="viewpass">
                            <label> <input type="checkbox" name="checkbox" value="value"/> Mostrar senha</label>
                        </div>

                        <div className="create-cont"> 
                            <a href="#">Faça login em vez disso</a>
                        </div>

                        <button className="btn-logar" type="button">Entrar</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;