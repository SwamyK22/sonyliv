import axiosInstanceDb from "../../../util/axiosDb/axiosInstanceDb";

export const loadNewsType = "LOAD_NEWS"
const laodNewsAction = () => {
        return async (dispatch) => {
            const res = await axiosInstanceDb.get('tvShows');
            const val = await res.data;
            dispatch({type: loadNewsType, payload: val.reverse()})
        }
}

export default laodNewsAction;