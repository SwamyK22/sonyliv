import { combineReducers } from "redux";
import movies from "./movies";
import admin from "./adminReducer";
import news from './newsReducer'
import sports from './sportsReducer'
import itemType from './editItemType';
import preview from './previewReducer'

const combineReducer = combineReducers({
    movies,
    admin,
    news,
    sports,
    itemType,
    preview
});

export default combineReducer;