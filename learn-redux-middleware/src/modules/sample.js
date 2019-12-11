import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';

// 액션 타입 선업
// 한 요청당 세 개를 만든다.

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga() {
	yield takeLatest(GET_POST, getPostSaga);
	yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
	post: null,
	users: null,
};

const sample = handleActions(
	{
		[GET_POST_SUCCESS]: (state, action) => ({
			...state,
			post: action.payload,
		}),
		[GET_USERS_SUCCESS]: (state, action) => ({
			...state,
			users: action.payload,
		}),
	},
	initialState,
);

export default sample;
