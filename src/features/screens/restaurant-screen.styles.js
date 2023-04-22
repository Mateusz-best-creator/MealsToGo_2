import styled from "styled-components"
import {Platform, StatusBar } from "react-native";

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

export const LoaderContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`