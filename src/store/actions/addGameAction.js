import {FETCH_ADD_GAME, FETCH_ADD_GAME_FINISH} from "./actionTypes"
import axios from "axios";

export function fetchAddGame(item) {
    return {
        type: FETCH_ADD_GAME,
        item
    }
}

export function fetchAddGameFinish() {
    return {
        type: FETCH_ADD_GAME_FINISH
    }
}

export function fetchFinishAddGame() {
    return async (dispatch, getState) => {
        await axios.post('https://gamer-arena-a2edb-default-rtdb.europe-west1.firebasedatabase.app/Games.json', getState().addGame.newGameItem)
        dispatch(fetchAddGameFinish())
    }
}