import styled from "styled-components/native";
import {View} from 'react-native';

export const SearchContainer = styled(View)`
    position: absolute;
    width: 100%;
    top: 40px;
    z-index: 100;
    padding: ${props => props.theme.space[3]};
`
