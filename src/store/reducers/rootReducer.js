import {combineReducers} from "redux"
import myGamesReducer from "../reducers/myGamesReducer"
import addGameReducer from "./addGameReducer"

export default combineReducers({
    myGames: myGamesReducer,
    addGame: addGameReducer
})