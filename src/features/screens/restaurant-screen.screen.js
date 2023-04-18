import React from "react";
import { FlatList } from "react-native";

// react native paper components
import { Searchbar } from "react-native-paper";

// restaurant screen'
import RestaurantInfo from "../components/restaurant-card-info.component";

import {
    ScreensContainer,
    SearchContainer,
    RestaurantsInfoContainer,
} from './restaurant-screen.styles';

const RestaurantsScreen = () => {

    return (
        <ScreensContainer>
            <SearchContainer>
                <Searchbar placeholder='Search for food...' />
            </SearchContainer>
            <RestaurantsInfoContainer>
                <FlatList 
                    data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}]}
                    renderItem={() => <RestaurantInfo />}
                    keyExtractor={item => item.id}
                />
            </RestaurantsInfoContainer>
        </ScreensContainer>
    )
}

export default RestaurantsScreen;