import { counterTypes } from "../type"

export const increaseCount = (count) => {
    return{
        type: counterTypes.increaseCount,
        payload: count
    }
}

export const decreaseCount = (count) => {
    return{
        type: counterTypes.decreaseCount,
        payload: count
    }
}