import styled from "styled-components"
import { View, Text, SafeAreaView, Platform, StatusBar, ScrollView } from "react-native";

export const ScreensContainer = styled.SafeAreaView`
    flex: 1;
    ${Platform.OS === 'android' && `padding-top: ${StatusBar.currentHeight}px` }
`

export const SearchContainer = styled.View`
    padding: ${props => props.theme.space[4]};;
    padding-bottom: ${props => props.theme.space[1]};
`

export const RestaurantsInfoContainer = styled.View`
    flex: 1;
    padding: ${props => props.theme.space[3]};
`