import * as actions from './actionCreator';

import axios from 'axios';

export function getData(state: object, route: string) {
  return async (dispatch: any) => {
    dispatch(actions.dataRequest());
    try {
      const response = await axios.get(route);
      dispatch(actions.dataReceived(response));
    } catch (e) {
      dispatch(actions.requestError(e));
    }
  };
}

export function selectWorkbook(wb: any) {
  return (dispatch: any) => {
    dispatch(actions.setNoteUnselected());
    dispatch(actions.selectWorkbook(wb));
  };
}