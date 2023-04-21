import React, { useEffect, useState } from "react";

// Card component from native-paper
import {Card} from 'react-native-paper';

// Text helper component
import { Text } from "../../components/text.component";

import {
    RestaurantCard,
    Rating,
    StarsContainer,
    Icon,
    DeatailInfoContainer,
    Spaced,
    SpacedTop,
} from './restaurant-card-info.styles';

// data for random image
import { mockImages } from "../../data/mock/mockRestaurants/index";

const RestaurantInfo = ({ restaurant = {} }) => {

    const {
        name = 'some restaurant',
        rating = 4,
        vicinity = 'random street 123',
        opening_hours,
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    } = restaurant.item;

    const StartEmptyArray = Array.from(new Array(Math.round(rating)));
    const isOpenNow = opening_hours && opening_hours.open_now;

    const [randomPhotoUrl, setRandomPhotoUrl] = useState('');
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * mockImages.length);
        setRandomPhotoUrl(mockImages[randomIndex]);
    }, [])

    return (
        <>
            <RestaurantCard>
                {
                    randomPhotoUrl && <Card.Cover source={{ uri: randomPhotoUrl }} />   
                }
                <SpacedTop />
                <Text variant="label">{name}</Text>
                <Rating>
                    <StarsContainer>
                        {
                            StartEmptyArray.map((_, index) => {
                                return (
                                    <Icon
                                        key={`${name}-${index}`}
                                        source={require('../../../assets/star2.jpg')}
                                    />
                                )
                            })
                        }
                    </StarsContainer>
                    <DeatailInfoContainer>
                        {
                            isOpenNow ? 
                            (
                                <>
                                <Spaced />
                                    <Icon
                                        source={require('../../../assets/open.png')}
                                    />
                                </>
                            )
                            : <Text variant="error">TEMPORARILY CLOSED</Text>
                        }
                        <Spaced />
                        <Icon
                            source={{
                            uri: icon,
                            }}
                        />
                    </DeatailInfoContainer>
                </Rating>
                <Text variant="caption">{vicinity}</Text>
            </RestaurantCard>
        </>
    )
}

export default RestaurantInfo;