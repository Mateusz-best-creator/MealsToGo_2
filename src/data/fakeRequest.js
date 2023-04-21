import React from "react";
import { mocks } from "./mock/mockRestaurants/index";

import {locations} from './mock/mockLocations/location.mock';

export const fakeApiRequest = (location) => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject('Not Found sth goes wrong!!!!.');
        }

        resolve(mock);
    })
}

export const fakeApiLocationRequest = (cityName) => {
    return new Promise((resolve, reject) => {
        const mock = locations[cityName];
        if(!mock) {
            reject('Not found sth goes wrong.');
        }

        resolve(mock);
    })
}