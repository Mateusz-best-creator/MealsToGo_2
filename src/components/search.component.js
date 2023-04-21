import React from "react";
// react native paper components
import { Searchbar } from "react-native-paper";

import { SearchContainer } from "../features/screens/restaurant-screen.styles";

export const Search = () => {
    return (
        <SearchContainer>
            <Searchbar />
        </SearchContainer>
    )
}