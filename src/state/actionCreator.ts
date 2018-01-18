import * as action from './constants';

export function dataRequest() {
  return {
    type: action.DATA_REQUEST
  };
}

export function dataReceived(data: any) {
  return {
    type: action.DATA_RECEIVED,
    data: data,
  };
}

export function requestError(e: string) {
  return {
    type: action.REQUEST_ERROR,
    error: e,
  };
}