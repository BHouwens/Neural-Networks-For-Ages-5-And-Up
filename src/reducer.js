const initPenguin = 5,
      initRhino = getRhinoNumber(initPenguin);

const initialState = {
    penguinNumber : initPenguin,
    rhinoNumber : initRhino,
    finalPenguinNumber : getFinalPenguinNumber(initPenguin, initRhino),
    frogNumber : getFrogNumber(initPenguin),
    finalRhinoNumber : getFinalRhinoNumber(initPenguin, initRhino),
    predFrogNumber : 5,
    flyNumber: 1
};

function getRhinoNumber(penguinNumber) {
    return parseFloat(penguinNumber) * 2 - 1;
}

function getFinalPenguinNumber(penguinNumber, rhinoNumber) {
    return Math.round( (parseFloat(penguinNumber) + parseFloat(rhinoNumber) + 1) / 2 );
}

function getFrogNumber(penguinNumber) {
    return parseFloat(penguinNumber) * 2 - 4;
}

function getFinalRhinoNumber(penguinNumber, rhinoNumber) {
    return Math.round(Math.random * parseFloat(penguinNumber)) + parseFloat(rhinoNumber) + 2;
}


/*-- Reducer --*/

export function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_PENGUIN':
            return Object.assign({}, state, { 
                penguinNumber : action.value,
                rhinoNumber : getRhinoNumber(action.value),
                finalPenguinNumber : getFinalPenguinNumber(action.value, getRhinoNumber(action.value)),
                finalRhinoNumber : getFinalRhinoNumber(action.value, getRhinoNumber(action.value)),
                frogNumber : getFrogNumber(action.value)
            });

        case 'CHANGE_FIRST_RHINO':
            return Object.assign({}, state, { 
                rhinoNumber : action.value,
                finalPenguinNumber : getFinalPenguinNumber(state.penguinNumber, action.value),
                finalRhinoNumber : getFinalRhinoNumber(state.penguinNumber, action.value)
            });

        default:
            return state;
    }
}