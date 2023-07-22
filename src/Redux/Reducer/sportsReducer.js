import { loadSportsType } from "../Action/thunkMiddleware/laodSportsAction";
const initState = [];

const sportsReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case loadSportsType:
            return payload;
        case 'DELETE_SPORTS': {
            const index = state.findIndex((x) => x.id === payload);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        }
            
        default:
            return state;
    }
}

export default sportsReducer;