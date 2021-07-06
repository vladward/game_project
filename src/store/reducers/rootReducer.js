import {combineReducers} from "redux"
import myGamesReducer from "../reducers/myGamesReducer"

export default combineReducers({
    myGames: myGamesReducer,

})