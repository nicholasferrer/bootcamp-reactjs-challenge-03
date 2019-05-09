import { all, takeLatest } from 'redux-saga/effects';
import { addDeveloper } from './developers';
import { Types as DevelopersTypes } from '../ducks/developers';

export default function* rootSaga() {
  yield all([takeLatest(DevelopersTypes.REQUEST, addDeveloper)]);
}
