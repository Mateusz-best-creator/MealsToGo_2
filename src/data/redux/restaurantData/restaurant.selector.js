import { createSelector } from "reselect";

const selectBasicRestaurantsStore = (store) => {
    return store
}

const selectRestaurantsObject = createSelector(
    [selectBasicRestaurantsStore],
    (currentState) => currentState.restaurants.restaurants
)

export const selectRestaurantsData = createSelector(
    [selectRestaurantsObject],
    (currentState) => currentState.results
)

export const selectIsLoading = createSelector(
    [selectBasicRestaurantsStore],
    (currentState) => currentState.restaurants.isLoading
)