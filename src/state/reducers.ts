import { combineReducers } from 'redux';

export const APP_INITIAL_STATE = {

};

export const DATA_INITIAL_STATE = {
  
};

function appReducer(state = APP_INITIAL_STATE, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

function dataReducer(state = DATA_INITIAL_STATE, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

export const reducer = combineReducers({
  app: appReducer,
  data: dataReducer
});