import { combineReducers } from "redux";
import {restaurantsReducer} from './restaurantData/restaurant.reducer';

export const rootReducer = combineReducers({
    restaurants: restaurantsReducer,
});