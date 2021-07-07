import {FETCH_ADD_GAME, FETCH_ADD_GAME_FINISH} from "../actions/actionTypes";

const initialState = {
    games: []}

export default function addGameReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ADD_GAME:
            return {
                ...state,
                games: [...state.games, action.item]
            }
        case FETCH_ADD_GAME_FINISH:
            return {
                ...state,
                games: []
            }
        default: return state
    }
}