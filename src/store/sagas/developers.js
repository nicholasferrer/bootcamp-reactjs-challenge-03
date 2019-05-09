import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Actions as DevelopersAction } from '../ducks/developers';
import { Actions as DeveloperModalAction } from '../ducks/developerModal';
import { Actions as MaskActions } from '../ducks/mask';

export function* addDeveloper(action) {
  try {
    yield put(MaskActions.showMask(true));

    if (action.payload.repositoryPath) {
      const { data } = yield call(api.get, `/users/${action.payload.repositoryPath}`);

      const isDuplicated = yield select(state => state.developers.find(dev => dev.id === data.id));

      if (isDuplicated) {
        yield put(DevelopersAction.developerError('Desenvolvedor duplicado!'));
      } else {
        const repositoryData = {
          id: data.id,
          name: data.name,
          description: data.login,
          avatar_url: data.avatar_url,
          cordinates: action.payload.cordinates,
        };

        yield put(DeveloperModalAction.hideModal());
        yield put(DevelopersAction.addDeveloperSuccess(repositoryData));
      }
    } else yield put(DevelopersAction.developerError('Informe o nome do diretório do Desenvolvedor'));
  } catch (err) {
    yield put(DevelopersAction.developerError('Não foi possível adicionar o desenvolvedor', err));
  } finally {
    yield put(MaskActions.showMask(false));
  }
}
