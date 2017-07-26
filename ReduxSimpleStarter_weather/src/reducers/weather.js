import {
    FETCH_WEATHER
} from '../actions/index';

export default function (state = [], action) {
    logAction(action);

    let newState = state;

    switch (action.type) {
        case FETCH_WEATHER:
            newState = [action.payload.data, ...state];
    }

    console.log('Current state:', newState);

    return newState;
}

function logAction(action) {
    if (action) {
        if (action.type === FETCH_WEATHER) {
            console.groupCollapsed(`RECEIVED ACTION '${action.type}' for '${action.payload.data.city.name}'`);
        } else {
            console.groupCollapsed(`RECEIVED ACTION '${action.type}'`);
        }
        console.log(`Type: '${action.type}'.`);
        if (action.payload === null || action.payload === undefined) {
            console.warn(`Payload is null or or undefined =>`, action.payload);
        } else {
            console.log(`City: '${action.payload.data.city.name}'.`);
            console.log(`Payload object =>`, action.payload);
        }
        console.groupEnd();
    }
}