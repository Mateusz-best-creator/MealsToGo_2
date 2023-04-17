import React from "react";
import styled from "styled-components";
import { View, Text, SafeAreaView, Platform, StatusBar, ScrollView } from "react-native";

// react native paper components
import { Searchbar } from "react-native-paper";

// restaurant screen'
import RestaurantInfo from "../components/restaurant-card-info.component";

const ScreensContainer = styled.SafeAreaView`
    flex: 1;
    ${Platform.OS === 'android' && `padding-top: ${StatusBar.currentHeight}px` }
`

const SearchContainer = styled.View`
    padding: ${props => props.theme.space[4]};;
    padding-bottom: ${props => props.theme.space[1]};
`

const RestaurantsInfoContainer = styled.View`
    flex: 1;
    padding: ${props => props.theme.space[3]};
`

const RestaurantsScreen = () => {

    const res = 4;
    const arrayRestaurants = Array.from(new Array(res));

    return (
        <ScreensContainer>
            <ScrollView>
                <SearchContainer>
                    <Searchbar placeholder='Search for food...' />
                </SearchContainer>
                <RestaurantsInfoContainer>
                    {
                        arrayRestaurants.map((_, index) => {
                            return (
                                <RestaurantInfo key={index} />
                            )
                        })
                    }
                </RestaurantsInfoContainer>
            </ScrollView>
        </ScreensContainer>
    )
}

export default RestaurantsScreen;