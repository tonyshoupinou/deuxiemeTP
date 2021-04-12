import { trailmodel } from "../../model/trailModel";

const initialestate = {
    trails: [trailmodel]
}

function trailreducer(state=initialestate, action) {
    let nextState;
    switch (action.type) {
        case "ADD_TRAIL": 
            nextState = {
                ...state, 
                trails: [...state.trails, action.value]
            }
            return nextState;
        case "EDIT_TRAIL": 
            const id = action.value.id;
            nextState = {...state};
            nextState[id] = action.value;
            return nextState;
        default:
            return state
    }
}

export default trailreducer