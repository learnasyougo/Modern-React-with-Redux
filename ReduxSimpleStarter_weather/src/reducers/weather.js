export default function (state = null, action) {
    logAction(action);
    return state;
}

function logAction(action) {
    if (action) {
        if (action.type === 'FETCH_WEATHER') {
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