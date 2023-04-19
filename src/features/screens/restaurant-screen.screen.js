import React, {useEffect, useState} from "react";
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

// redux dispatch
import { useDispatch } from "react-redux";
import { setRestaurants } from "../../data/redux/restaurantData/restaurant.actions";
// redux selector hook
import { useSelector } from "react-redux";
import {selectRestaurantsData} from '../../data/redux/restaurantData/restaurant.selector';
import { selectIsLoading } from "../../data/redux/restaurantData/restaurant.selector";

// api reqyest
import { fakeApiRequest } from "../../data/fakeRequest";

import { mockImages } from "../../data/mock";

const RestaurantsScreen = () => {

    const dispatch = useDispatch();
    const resturantDataFromApi = useSelector(selectRestaurantsData);
    const isLoading = useSelector(selectIsLoading);
    console.log(isLoading);

    useEffect(() => {
        setTimeout(() => {
            
            fakeApiRequest()
                .then(data => dispatch(setRestaurants(data)))
                .catch(console.log)
        }, 3000)
    }, [])
    
    return (
        <ScreensContainer>
            <SearchContainer>
                <Searchbar placeholder='Search for food...' />
            </SearchContainer>
            <RestaurantsInfoContainer>
                <FlatList 
                    data={resturantDataFromApi}
                    renderItem={(item) => <RestaurantInfo restaurant={item} />}
                    keyExtractor={item => item.id}
                />
            </RestaurantsInfoContainer>
        </ScreensContainer>
    )
}

export default RestaurantsScreen;