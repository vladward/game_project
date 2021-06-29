import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Switch, Route, Redirect} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Switch>
                <Header/>
                <Navbar/>
                <Route path="/profile" component={Profile}/>
                <Route path="/MyGames" component={MyGames}/>
                <Route path="/Statistics" component={Statistics}/>
                <Route path="/Friends" component={Friends}/>
                <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
            </Switch>
        </div>
    );
}

export default App;
