import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

import board from './board';
import bckList from './bckList';
import bckSave from './bckSave';
import bckDetail from './bckDetail';

export default combineReducers({
    board,
    bckList,
    bckSave,
    bckDetail,
    pender: penderReducer
});