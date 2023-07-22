import axiosInstanceDb from "../../../util/axiosDb/axiosInstanceDb";

export const loadSportsType = "LOAD_SPORTS"
const laodSportsAction = () => {
        return async (dispatch) => {
            const res = await axiosInstanceDb.get('sports');
            const val = await res.data;
            dispatch({type: loadSportsType, payload: val.reverse()})
        }
}

export default laodSportsAction;