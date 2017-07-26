export default function (state = null, action) {
    logAction(action);
    return state;
}

function logAction(action) {
    if (action) {
        console.group(`RECIEVED ACTION '${action.type}'`);
        console.log(`Type: '${action.type}'.`);
        if (action.payload === null || action.payload === undefined) {
            console.warn(`Payload is null or or undefined.`, action.payload);
        } else {
            console.log(`Payload: `, action.payload);
        }
        console.groupEnd();
    }
}