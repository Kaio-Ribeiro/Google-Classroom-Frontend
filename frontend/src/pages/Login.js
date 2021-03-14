import React from 'react';

function Login() {
    return (
        <div className="login">
            <div className="content-wraper">
                <h1>Fazer Login</h1>
                <h3>Use sua conta do Google</h3>

                <form>
                    <div className="form-group">
                        <input type="email" name="name" placeholder="Digite seu e-mail"/>
                    </div>

                    <div className="form-group">
                        <input type="password" name="name" placeholder="Digite sua senha" />
                    </div>

                    <div>
                        <label><input type="checkbox" name="checkbox" value="value"/>Mostrar senha</label>
                    </div>
                    
                    <div>
                        <a href="#">Criar conta</a>
                    </div>

                    <div className="form-group">
                        <button type="button">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;