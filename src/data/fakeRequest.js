import React from "react";
import { mocks } from "./mock/mockRestaurants/index";;

export const fakeApiRequest = (location = "41.878113,-87.629799") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject('Not Found.');
        }

        resolve(mock);
    })
}