import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
    restaurants: [],
    isLoading: false,
    error: null,
}

const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState: InitialState,
    reducers: {
        setRestaurants(state, action) {
            state.restaurants = action.payload;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
    }
})

export const {setRestaurants} = restaurantSlice.actions;
export const {setLoading} = restaurantSlice.actions;
export const restaurantsReducer = restaurantSlice.reducer;