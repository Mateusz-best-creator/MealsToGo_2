import { createSelector } from "reselect";

const selectStateLocation = (state) => {
    return state.location;
}

export const selectCityName = createSelector(
    [selectStateLocation],
    (currentState) => currentState.cityName
)

export const selectLocation = createSelector(
    [selectStateLocation],
    (currentState) => currentState.location,
)