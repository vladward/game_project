import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Switch, Route, Redirect} from "react-router-dom";
import Profile from "./containers/Profile/Profile";
import MyGames from "./containers/MyGames/MyGames";
import Statistics from "./containers/Statistics/Statistics";
import Friends from "./containers/Friends/Friends";

const App = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Switch>
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
