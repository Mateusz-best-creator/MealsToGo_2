import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cityName: 'toronto',
    location: '43.653225,-79.383186',
}

const locationsSlice = createSlice({
    name: 'locations',
    initialState: INITIAL_STATE,
    reducers: {
        setCityName(state, action) {
            state.cityName = action.payload;
        },
        setLocation(state, action) {
            state.location = action.payload;
        }
    }
})

export const {setCityName, setLocation} = locationsSlice.actions;
export const locationReducer = locationsSlice.reducer;