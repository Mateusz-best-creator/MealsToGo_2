import { RestaurantsTypes } from "./restaurant.types";

const InitialState = {
    restaurants: [],
    isLoading: false,
    error: null,
}

export const restaurantsReducer = ( state = InitialState, action ) => {
    const {type, payload} = action;

    switch(type) {
        case RestaurantsTypes.SET_RESTAURANTS_DATA:
            return {
                ...state,
                restaurants: payload,
            }
        default:
            return state;
    }
}