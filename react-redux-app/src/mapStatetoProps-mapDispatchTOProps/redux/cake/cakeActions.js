import {BUY_CAKE} from './cakeTypes'

//action creator which return an object
export const buyCake = (number = 1) => {
    return {
        type:BUY_CAKE,
        payload: number
    }
}

