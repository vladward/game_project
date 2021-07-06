import {FETCH_MYGAMES_ERROR, FETCH_MYGAMES_START, FETCH_MYGAMES_SUCCESS} from "../actions/actionTypes";

const initialState = {
    games: [],
    error: null
}

export default function myGamesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MYGAMES_START:
            return {
                ...state
            }
        case FETCH_MYGAMES_SUCCESS:
            return {
                ...state,
                games: action.games
            }
        case FETCH_MYGAMES_ERROR:
            return {
                ...state,
                error: action.error
            }
        default: return state
    }

}