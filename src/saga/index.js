import { take, put, all } from 'redux-saga/effects';

import { JOIN_REQUEST, JOIN_SUCCESS, JOIN_FAIL } from '../actions';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions';

import axios from 'axios';

const handleSignUp = function* handleSignUp() {
    const { payload } = yield take(JOIN_REQUEST);
    try {
        const data = yield axios.post("/api/join", payload)
        yield put({ type: JOIN_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: JOIN_FAIL, payload: error })
    }
}

const handleSignIn = function* handleSignIn() {
    const { payload } = yield take(LOGIN_REQUEST);
    try {
        const data = yield axios.post("/api/login", payload)
        yield put({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: LOGIN_FAIL, payload: error })
    }
}

export default function* () {
    yield all([
        handleSignUp(),
        handleSignIn()
    ]);
}