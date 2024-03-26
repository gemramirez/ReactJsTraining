import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersFetch, setMessage } from "../../State/userState";
import axios from "axios";
import { createAction } from "@reduxjs/toolkit";

function* fetchUserInfoSaga(action: ReturnType<typeof getUserInfo>): any {
	try {
		  yield call(
			apiFetchUserInfo,
			action.payload.userId
		);
	} catch (error) {
		yield call(catchErr, error);
	}
}

export function* userSagaFetchUserInfo() {
	yield takeEvery(getUserInfo.type, fetchUserInfoSaga);
}

const apiFetchUserInfo = async (userId: any): Promise<any> => {
	try {
		return axios.get(`http://localhost:8080/user/info/${userId}`);
	} catch (error) {
		return error;
	}
};

export const getUserInfo = createAction<{
	userId: any;
}>("users/getUserInfo");

function* catchErr(err: any) {
	yield put(getUsersFetch());
	yield put(
		setMessage({
			message: err?.response?.data,
			severity: "error",
		})
	);
}