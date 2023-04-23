import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import MapSearchBar from '../components/map-search-bar.components';

import { Map } from './map-screen.styles';

import { useSelector } from 'react-redux';
import { selectLocation } from '../../../data/redux/locationsData/locations.selector';

const MapScreen = () => {

  const locationProperties = useSelector(selectLocation)
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  useEffect(() => {
    let value = '';
    for (let i = 0; i < locationProperties.length; i++) {
        if (locationProperties[i] === ',') {
          setLat(value);
          value = '';
          continue;
        }
        value += locationProperties[i];
    }
    setLng(value)
  }, [locationProperties])

  return (
    
    <>
        <MapSearchBar />
        <Map
        region={{
          latitude: Number(lat),
          longitude: Number(lng),
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        
      </Map>
    </>
    
  );
}

export default MapScreen;