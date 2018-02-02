import { combineReducers } from 'redux';
import * as types from './constants';
import { workbooklist } from './data';

export const APP_INITIAL_STATE = {
  
};

export const DATA_INITIAL_STATE = {
  workbooks: workbooklist,
  activeWorkbook: workbooklist[0],
};

function appReducer(state = APP_INITIAL_STATE, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

function dataReducer(state = DATA_INITIAL_STATE, action: any) {
  switch (action.type) {
    case(types.WORKBOOK_SELECTED):
      return {
        ...state,
        activeWorkbook: action.wb
      };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  app: appReducer,
  data: dataReducer
});