import { trailmodel, trailmodel2 } from "../../screens/model/trailModel";

const initialestate = {
    trails: [trailmodel, trailmodel2]
}

function trailreducer(state=initialestate, action) {
    let nextState;
    switch (action.type) {
        case "ADD_TRAIL":
            nextState = {
                ...state, 
                trails: [...state.trails, action.value]
            }
            console.log('Next State', nextState); 
            return nextState;
        case "EDIT_TRAIL": 
            const id = action.value.id;
            nextState = {
                ...state, 
                trails: [...state.trails]
            }
            for (let i = 0; i < nextState.trails.length; i++) {
                if (nextState.trails[i].id === id) {
                    nextState.trails[i] = action.value;
                }
            }
            return nextState;
        default:
            return state
    }
}

export default trailreducer;