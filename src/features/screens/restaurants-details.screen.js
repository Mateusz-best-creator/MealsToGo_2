import React, {useState} from "react";

import {ScrollView} from 'react-native';

import { List } from 'react-native-paper';

import { ScreensContainer, RestaurantsInfoContainer } from "./restaurant-screen.styles";

// restaurant info card
import RestaurantInfo from "../components/restaurant-card-info.component";

export const RestaurantsDetailsScreen = ({ route: {params: {photoUrl, restaurant}} }) => {

    const [expandedBreakfast, setExpandedBreakfast] = useState(false);
    const [expandedLunch, setExpandedLunch] = useState(false);
    const [expandedDinner, setExpandedDinner] = useState(false);
    const [expandedDrinks, setExpandedDrinks] = useState(false);

    return (
        <ScreensContainer>
            <RestaurantsInfoContainer>
                <RestaurantInfo restaurant={restaurant} photoUrl={photoUrl} />
                <ScrollView>
                    <List.Section>
                        <List.Accordion
                            title="Breakfast"
                            left={props => <List.Icon {...props} icon="bread-slice" />}
                            expanded={expandedBreakfast}
                            onPress={() => setExpandedBreakfast(!expandedBreakfast)}>
                            <List.Item title="Eggs Benedict" />
                            <List.Item title="Classic Breakfast" />
                        </List.Accordion>

                        <List.Accordion
                            title="Dinner"
                            left={props => <List.Icon {...props} icon="hamburger" />}
                            expanded={expandedLunch}
                            onPress={() => setExpandedLunch(!expandedLunch)}>
                            <List.Item title="Burger w/ Fries" />
                            <List.Item title="Steak Sandwich" />
                            <List.Item title="Mushroom Soup" />
                        </List.Accordion>

                        <List.Accordion
                            title="Dinner"
                            left={props => <List.Icon {...props} icon="food-variant" />}
                            expanded={expandedDinner}
                            onPress={() => setExpandedDinner(!expandedDinner)}>
                            <List.Item title="Spaghetti Bolognese" />
                            <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
                            <List.Item title="Steak Frites" />
                        </List.Accordion>

                        <List.Accordion
                            title="Dinner"
                            left={props => <List.Icon {...props} icon="cup" />}
                            expanded={expandedDrinks}
                            onPress={() => setExpandedDrinks(!expandedDrinks)}>
                            <List.Item title="Coffee" />
                            <List.Item title="Tea" />
                            <List.Item title="Modelo" />
                            <List.Item title="Coke" />
                            <List.Item title="Fanta" />
                        </List.Accordion>
                    </List.Section>
                </ScrollView>
            </RestaurantsInfoContainer>
        </ScreensContainer>
    )
}