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
import { fakeApiRequest } from "../../data/fakeRequest";

// loader
import Loader from "../../components/loader";

// random photos array
import { mockImages } from "../../data/mock/mockRestaurants";

const RestaurantsScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const resturantDataFromApi = useSelector(selectRestaurantsData);
    const isLoading = useSelector(selectIsLoading);
    const location = useSelector(selectLocation);
    const cityName = useSelector(selectCityName);
    const [randomPhotos, setRandomPhotos] = useState([]);
    
    useEffect(() => {
        dispatch(setLoading(true))

        setTimeout(() => {
            fakeApiRequest(location)
                .then(data => dispatch(setRestaurants(data)))
                .catch(console.log)
            dispatch(setLoading(false))
        }, 3000)
    }, [cityName, location])

    useEffect(() => {
        let photosArray = [];
        for (let i = 0; i < 25; i++) {
            const randomIndex = Math.floor(Math.random() * mockImages.length);
            const randomPhotoUrl = mockImages[randomIndex];
            photosArray.push(randomPhotoUrl)
        }
        setRandomPhotos(photosArray)
    },[cityName])

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
                                <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', {photoUrl: randomPhotos[item.index], restaurant: item})}>
                                    <RestaurantInfo restaurant={item} photoUrl={randomPhotos[item.index]} />
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