import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPlayers(action) {
    try {
        const response = yield axios.get(`api/character/campaign/${action.payload}`)
        yield put({ type: 'SET_PLAYER_CHARACTERS', payload: response.data });
    } catch (error) {
        console.log('Error getting player characters', error);
    }
}
function* fetchNPCs(action) {
    try {
        const response = yield axios.get(`api/monster`)
        yield put({ type: 'SET_NON_PLAYER_CHARACTERS', payload: response.data });
    } catch (error) {
        console.log('Error getting player characters', error);
    }
}


function* characterSaga() {
    yield takeLatest('FETCH_PLAYER_CHARACTERS', fetchPlayers);
    yield takeLatest('FETCH_NON_PLAYER_CHARACTERS', fetchNPCs);
}

export default characterSaga;