import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Switch, Route, Redirect} from "react-router-dom";
import Profile from "./containers/Profile/Profile";
import MyGames from "./containers/MyGames/MyGames";
import Statistics from "./containers/Statistics/Statistics";
import Friends from "./containers/Friends/Friends";
import Settings from "./components/Settings/Settings";
import Auth from "./containers/Auth/Auth";
import AddGame from "./containers/MyGames/AddGames/AddGame";

const App = () => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Switch>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/MyGames" component={MyGames}/>
                    <Route path="/AddGame" component={AddGame}/>
                    <Route path="/Statistics" component={Statistics}/>
                    <Route path="/Friends" component={Friends}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/auth" component={Auth}/>
                    <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                    <Route path='/*' render={() => <div>404 not found</div>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
