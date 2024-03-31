import { counterTypes } from "../type";

const initialState = {
    count: 1
}

const counterReducer = (state = initialState, action) => {
    console.log('action: ', action);
    switch(action.type){
        case counterTypes.increaseCount: {
            const newCount = action.payload + 1;
            return {
                ...state,
                count: newCount
            }
        }
        case counterTypes.decreaseCount: {
            const newCount = action.payload - 1;
            return {
                ...state,
                count: newCount
            }
        }
        default:
            return state;
    }
}

export default counterReducer;