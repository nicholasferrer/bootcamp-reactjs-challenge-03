import { combineReducers } from 'redux';

import mask from './mask';
import developers from './developers';
import developerModal from './developerModal';

export default combineReducers({
  mask,
  developers,
  developerModal,
});
