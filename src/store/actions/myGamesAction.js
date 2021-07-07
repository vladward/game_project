import axios from "axios";
import {FETCH_MYGAMES_ERROR, FETCH_MYGAMES_START, FETCH_MYGAMES_SUCCESS} from "./actionTypes";

export function fetchMyGames() {
    return async dispatch => {
        dispatch(fetchMyGamesStart())
        try {

            const response = await axios.get('https://gamer-arena-a2edb-default-rtdb.europe-west1.firebasedatabase.app/Games.json')
            const games = []
            const responseArr = Object.values(response.data).map(item => {
                games.push({
                    data: item
                })
                return games
            })
            // if(responseArr.length > 0) {
            //     const games = responseArr
            //     console.log(games)
            // }
            console.log(games)
            dispatch(fetchMyGamesSuccess(games))
        } catch (e) {
            dispatch(fetchMyGamesError(e))
        }
    }
}

export function fetchMyGamesStart() {
    return {
        type: FETCH_MYGAMES_START
    }
}

export function fetchMyGamesSuccess(games) {
    return {
        type: FETCH_MYGAMES_SUCCESS,
        games
    }
}

export function fetchMyGamesError(e) {
    return {
        type: FETCH_MYGAMES_ERROR,
        error: e
    }
}