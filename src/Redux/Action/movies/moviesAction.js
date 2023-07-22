export const loadMovieType = 'LOAD_MOVIES';
export const deleteMovieType = 'DELETE_MOVIE';

export const moviesAction = (obj) => {
    return {
        type: loadMovieType,
        payload: obj
    }
}

export const movieDeleteAction = (id, type) => {
    return {
        type: type,
        payload: id
    }
}