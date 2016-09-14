const initPenguin = 5,
      initRhino = getRhinoNumber(initPenguin);

const initialState = {
    penguinNumber : initPenguin,
    rhinoNumber : initRhino,
    finalPenguinNumber : getFinalPenguinNumber(initPenguin, initRhino),
    genieNumber : getFinalPenguinNumber(initPenguin, initRhino) - 5,
    frogNumber : getFrogNumber(initPenguin),
    predFrogNumber : 5,
    flyNumber: 1
};

function getRhinoNumber(penguinNumber) {
    return penguinNumber * 2 - 1;
}

function getFinalPenguinNumber(penguinNumber, rhinoNumber) {
    return penguinNumber * rhinoNumber / 2;
}

function getFrogNumber(penguinNumber) {
    return penguinNumber * 2 - 4;
}


/*-- Reducer --*/

export function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_PENGUIN':
            return Object.assign({}, state, { 
                penguinNumber : action.value,
                rhinoNumber : getRhinoNumber(action.value),
                finalPenguinNumber : getFinalPenguinNumber(action.value, getRhinoNumber(action.value)),
                genieNumber : getFinalPenguinNumber(state.penguinNumber, action.value) - 5,
                frogNumber : getFrogNumber(action.value)
            });

        case 'CHANGE_RHINO':
            return Object.assign({}, state, { 
                rhinoNumber : action.value,
                finalPenguinNumber : getFinalPenguinNumber(state.penguinNumber, action.value),
                genieNumber : getFinalPenguinNumber(state.penguinNumber, action.value) - 5
            });

        default:
            return state;
    }
}