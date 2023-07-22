import { deleteMovieType, loadMovieType } from "../Action/movies/moviesAction";

const initState = [];

const moviesReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case loadMovieType:
            return payload;
        case deleteMovieType: {
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

export default moviesReducer;