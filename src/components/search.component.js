import React, {useState} from "react";
// react native paper components
import { Searchbar } from "react-native-paper";

import { SearchContainer } from "../features/screens/restaurant-screen.styles";

// redux dispatch
import { useDispatch } from "react-redux";
import { setCityName, setLocation } from "../data/redux/locationsData/locations.reducer";

import { fakeApiLocationRequest } from "../data/fakeRequest";

export const Search = () => {

    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    const handleChange = (e) => {
        setSearchText(e);
    }

    const handleSubmit = () => {
        if(!searchText) return;
        const textWithoutSpaces = searchText.trim().toLowerCase();
        fakeApiLocationRequest(textWithoutSpaces)
            .then(data => data.results[0].geometry.location)
            .then(result => {
                const {lat, lng} = result;
                const stringLocation = `${lat},${lng}`;
                dispatch(setLocation(stringLocation));
            })
        dispatch(setCityName(textWithoutSpaces))
    }
    
    return (
        <SearchContainer>
            <Searchbar 
                onChangeText={handleChange}
                value={searchText}
                onSubmitEditing={handleSubmit}
            />
        </SearchContainer>
    )
}