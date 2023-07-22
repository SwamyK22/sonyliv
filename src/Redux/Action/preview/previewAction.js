import axiosInstanceDb from "../../../util/axiosDb/axiosInstanceDb";

function previewAction() {
    return async (dispatch) => {
        const res = await axiosInstanceDb.get('/preview');
        const data = await res.data;
        dispatch({type: 'preview', payload: data});
    }
}

export default previewAction;