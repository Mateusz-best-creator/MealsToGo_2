import React from "react";
import styled from "styled-components";
import { View, Image } from "react-native";

// Card component from native-paper
import {Card} from 'react-native-paper';

export const RestaurantCard = styled(Card)`
    padding: ${props => props.theme.space[3]};
    background-color: white;
    margin-bottom: ${props => props.theme.space[5]};
`

export const Rating = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${props => props.theme.space[2]};
    margin-bottom: ${props => props.theme.space[2]};
`

export const StarsContainer = styled.View`
    display: flex;
    flex-direction: row;
`

export const Icon = styled.Image`
    height: ${props => props.theme.space[4]};;
    width: ${props => props.theme.space[4]};;
`

export const DeatailInfoContainer = styled.View`
    display: flex;
    flex-direction: row;
`

export const Spaced = styled.View`
    padding-left: ${props => props.theme.space[2]};
`

export const SpacedTop = styled.View`
    padding-top: ${props => props.theme.space[3]};
`