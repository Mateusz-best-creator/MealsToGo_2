import React from "react";

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

const RestaurantInfo = ({ restaurant = {} }) => {

    const {
        name = 'some restaurant',
        amountOfStars = 4,
        street = 'random street 123',
        isClosed = true,
        logoUrl = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        iconUrl = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    } = restaurant;

    const StartEmptyArray = Array.from(new Array(amountOfStars));

    return (
        <>
            <RestaurantCard>
                <Card.Cover source={{ uri: logoUrl }} />
                <SpacedTop />
                <Text variant="label">{name}</Text>
                <Rating>
                    <StarsContainer>
                        {
                            StartEmptyArray.map((_, index) => {
                                return (
                                    <Icon
                                        key={index}
                                        source={require('../../../assets/star2.jpg')}
                                    />
                                )
                            })
                        }
                    </StarsContainer>
                    <DeatailInfoContainer>
                        {
                            isClosed && <Text variant="error">TEMPORARILY CLOSED</Text>
                        }
                        <Spaced />
                        <Icon
                            source={require('../../../assets/open.png')}
                        />
                        <Spaced />
                        <Icon
                            source={require('../../../assets/sleep.png')}
                        />
                    </DeatailInfoContainer>
                </Rating>
                <Text variant="caption">{street}</Text>
            </RestaurantCard>
        </>
    )
}

export default RestaurantInfo;