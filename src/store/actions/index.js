import {start} from '../helper';

export const increment = (value) => (dispatch, getState) => {
    value++;
    dispatch({
        type: "INCREMENT",
        input: value
    })
}

export const rejectUp = (value) => (dispatch, getState) => {
    value++;
    dispatch({
        type: "REJECTUP",
        input: value,
    })
}

export const machine = (bool, duration, value) => (dispatch, getState) => {
    try {
        // start(bool, duration, value);
        let i = 0;
        while (i < 2) {
            setTimeout(() => {
                i++;
                console.log("The i is incrementing", i)
            }, duration)
        }
        console.log("Finish")
    } catch {
        console.error("Not working you sick fuck", bool, duration)
    }
}