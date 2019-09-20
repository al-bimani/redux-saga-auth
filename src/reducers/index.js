import { JOIN_REQUEST, JOIN_SUCCESS, JOIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions';

const defaultState = {
    pending: false,
    payload: null,
    error: null
}


export default function (state = defaultState, action) {
    console.log(action)
    switch (action.type) {
        case JOIN_REQUEST || LOGIN_REQUEST: {
            return {
                payload: action.payload,
                pending: true,
                ...state
            }
        }
        case JOIN_SUCCESS || LOGIN_SUCCESS: {
            return {
                payload: action.payload,
                pending: false,
                ...state
            }
        }
        case JOIN_FAIL || LOGIN_FAIL: {
            return {
                error: action.payload,
                pending: false,
                ...state
            }
        }
        default: {
            return state;
        }
    }
}
