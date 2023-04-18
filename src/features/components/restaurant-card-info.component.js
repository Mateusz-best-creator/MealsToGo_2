import React from "react";
import styled from "styled-components";
import { View, Image } from "react-native";

// Card component from native-paper
import {Card} from 'react-native-paper';

// Text helper component
import { Text } from "../../components/text.component";

const RestaurantCard = styled(Card)`
    padding: ${props => props.theme.space[3]};
    background-color: white;
    margin-top: ${props => props.theme.space[5]};
`

const Rating = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${props => props.theme.space[2]};
    margin-bottom: ${props => props.theme.space[2]};
`

const StarsContainer = styled.View`
    display: flex;
    flex-direction: row;
`

const Icon = styled.Image`
    height: ${props => props.theme.space[4]};;
    width: ${props => props.theme.space[4]};;
`

const DeatailInfoContainer = styled.View`
    display: flex;
    flex-direction: row;
`

const Spaced = styled.View`
    padding-left: ${props => props.theme.space[2]};
`

const SpacedTop = styled.View`
    padding-top: ${props => props.theme.space[3]};
`

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