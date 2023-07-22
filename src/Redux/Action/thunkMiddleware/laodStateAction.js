import axiosInstanceDb from "../../../util/axiosDb/axiosInstanceDb";
import { moviesAction } from "../movies/moviesAction";

const laodStateAction = () => {
        return async (dispatch) => {
            const res = await axiosInstanceDb.get('moviesDb');
            const val = await res.data;
            dispatch(moviesAction(val.reverse()))
        }
}

export default laodStateAction;