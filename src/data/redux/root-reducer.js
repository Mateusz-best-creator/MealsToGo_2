import { combineReducers } from "redux";
import {restaurantsReducer} from './restaurantData/restaurant.reducer';
import { locationReducer } from "./locationsData/locations.reducer";

export const rootReducer = combineReducers({
    restaurants: restaurantsReducer,
    location: locationReducer,
});