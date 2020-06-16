import "bootstrap/dist/css/bootstrap.min.css"

import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Navbar from "./components/navbar"
import ExercisesList from "./components/exercises-list"
import CreateExercise from "./components/create-exercise"
import CreateUser from "./components/create-user"
import EditExercise from "./components/edit-exercise"


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Switch>
          <Route exact path='/' component={ExercisesList} />
          <Route exact path='/create' component={CreateExercise} />
          <Route exact path='/user' component={CreateUser} />
          <Route exact path='/edit/:id' component={EditExercise} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
