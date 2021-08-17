import React from "react";
import {
    onLoadForm
} from "./backend.js"
import {
    SETLIKE
} from "./const.js"
import data from "./data/entities.json"

const dataPlaces = onLoadForm(data);
const {
    response
} = dataPlaces;
const DataContext = React.createContext("places");
const initialState = {
    places: response
};



const dataReducer = (state, action) => {
    switch (action.type) {
        case SETLIKE:
            let stateDataRewriteArray = [...state.places];
            let idForLike = action.payload;            
            let index = stateDataRewriteArray.findIndex((it) => it.id === idForLike);
            if (index > -1) {
                stateDataRewriteArray[index].like = !stateDataRewriteArray[index].like;
            }
            return Object.assign({}, state, {
                places: stateDataRewriteArray
            });
        default:
            return state
    }
};

export {
    DataContext,
    initialState,
    dataReducer
};