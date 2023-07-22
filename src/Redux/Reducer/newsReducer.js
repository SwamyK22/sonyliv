import { loadNewsType } from "../Action/thunkMiddleware/loadNewsAction";
const initState = [];

const newsReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case loadNewsType:
            return payload;
        case 'DELETE_NEWS': {
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

export default newsReducer;