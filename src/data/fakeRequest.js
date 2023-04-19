import React from "react";
import { mockImages, mocks } from "./mock";

export const fakeApiRequest = (location = "41.878113,-87.629799") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject('Not Found.');
        }
        

        resolve(mock);
    })
}