import React, {useEffect, useState} from "react";
import { FlatList, TouchableOpacity } from "react-native";

// search bar component
import { Search } from "../../components/search.component";

// restaurant screen'
import RestaurantInfo from "../components/restaurant-card-info.component";

import {
    ScreensContainer,
    RestaurantsInfoContainer,
    LoaderContainer,
} from './restaurant-screen.styles';

// redux dispatch
import { useDispatch } from "react-redux";
import { setCityName, setLocation } from "../../data/redux/locationsData/locations.reducer";
import { 
    setRestaurants,
    setLoading,
} from "../../data/redux/restaurantData/restaurant.reducer";
// redux selector hook
import { useSelector } from "react-redux";
import {selectRestaurantsData,} from '../../data/redux/restaurantData/restaurant.selector';
import { selectIsLoading } from "../../data/redux/restaurantData/restaurant.selector";
import { selectLocation, selectCityName } from "../../data/redux/locationsData/locations.selector";

// api reqyest
import { fakeApiLocationRequest, fakeApiRequest } from "../../data/fakeRequest";

// loader
import Loader from "../../components/loader";

const RestaurantsScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const resturantDataFromApi = useSelector(selectRestaurantsData);
    const isLoading = useSelector(selectIsLoading);
    const location = useSelector(selectLocation);
    const cityName = useSelector(selectCityName);
    console.log("Navigation", navigation)
    useEffect(() => {
        dispatch(setLoading(true))

        setTimeout(() => {
            fakeApiRequest(location)
                .then(data => dispatch(setRestaurants(data)))
                .catch(console.log)
            dispatch(setLoading(false))
        }, 3000)
    }, [cityName, location])
    
    return (
        <ScreensContainer>
            <Search />
            <RestaurantsInfoContainer>
                {
                    !isLoading ?
                    <FlatList 
                        data={resturantDataFromApi}
                        renderItem={(item) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails')}>
                                    <RestaurantInfo restaurant={item} />
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />
                    : <LoaderContainer>
                        <Loader />
                    </ LoaderContainer>
                }
            </RestaurantsInfoContainer>
        </ScreensContainer>
    )
}

export default RestaurantsScreen;