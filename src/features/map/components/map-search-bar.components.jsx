import React, {useState} from 'react';
import { Searchbar } from 'react-native-paper';

import { SearchContainer } from './map-search-bar.styles';

// redux dispatch
import { useDispatch } from "react-redux";
import { setCityName, setLocation } from '../../../data/redux/locationsData/locations.reducer';

import { fakeApiLocationRequest } from '../../../data/fakeRequest';

const MapSearchBar = () => {

  const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    const handleChange = (e) => {
        setSearchText(e);
    }

    const handleSubmit = () => {
        if(!searchText) return;
        const textWithoutSpaces = searchText.trim().toLowerCase();
        fakeApiLocationRequest(textWithoutSpaces)
            .then(data => data.results[0].geometry.location)
            .then(result => {
                const {lat, lng} = result;
                const stringLocation = `${lat},${lng}`;
                dispatch(setLocation(stringLocation));
            })
        dispatch(setCityName(textWithoutSpaces))
    }

  return (
    <SearchContainer>
        <Searchbar
            onChangeText={handleChange}
            value={searchText}
            onSubmitEditing={handleSubmit}
        />
    </SearchContainer>
  );
};

export default MapSearchBar;