import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Create_classroom from './pages/Create_classroom/Create_classroom.js';
import Mural from './pages/Mural/Mural.js';
import Persons from './pages/Persons/Persons.js';
import Homeworks from './pages/Homeworks/Homeworks.js';
import Materials from './pages/Materials/Materials.js';
import Create_Homework from './pages/Create_atividade/Create_Homework.js';
import Create_Material from './pages/Create_Material/Create_Material.js';
import Information_Homework from './pages/Information_Homeworks/Info_Home.js';
import Information_Material from './pages/Information_Material/Info_Mate.js';
import Edit_Homework from './pages/Edit_Homeworks/Edit_Homeworks.js';
import Edit_Material from './pages/Edit_Material/Edit_Material.js';
import Notas from './pages/Notas/Notas.js';

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
                <Route path="/notas" component={Notas} />
                <Route path="/homeworks" component={Homeworks} />
                <Route path="/createHomework" component={Create_Homework}/>
                <Route path="/createMaterial" component={Create_Material}/>
                <Route path="/informationHomework" component={Information_Homework}/>
                <Route path="/informationMaterial" component={Information_Material}/>
                <Route path="/editHomework" component={Edit_Homework}/>
                <Route path="/editMaterial" component={Edit_Material}/>
                <Route path="/materials" component={Materials}/>


            </Switch>
        </BrowserRouter>
    )
}