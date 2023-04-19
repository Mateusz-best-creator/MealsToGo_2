import {RestaurantsTypes} from './restaurant.types'


export const setRestaurants = (restaurant) => {
    return {type: RestaurantsTypes.SET_RESTAURANTS_DATA, payload: restaurant};
}