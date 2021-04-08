import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Create_classroom from './pages/Create_classroom/Create_classroom.js';
import Mural from './pages/Mural/Mural.js';
import Persons from './pages/Persons/Persons.js';
import Homeworks from './pages/Homeworks/Homeworks.js';
import Create_Homework from './pages/Create_atividade/Create_Homework.js';
import Create_Material from './pages/Create_Material/Create_Material.js'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/createClassroom" component={Create_classroom} />
                <Route path="/mural" component={Mural} />
                <Route path="/persons" component={Persons} />
                <Route path="/homeworks" component={Homeworks} />
                <Route path="/createHomework" component={Create_Homework}/>
                <Route path="/createMaterial" component={Create_Material}/>
            </Switch>
        </BrowserRouter>
    )
}