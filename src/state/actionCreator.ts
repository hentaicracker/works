import { NoteItem } from '../utils/appInterface';
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

export function setNoteUnselected() {
  return {
    type: action.SET_NOTE_UNSELECTED,
  };
}

export function selectWorkbook(wb: any) {
  return {
    type: action.WORKBOOK_SELECTED,
    wb: wb,
    notes: wb.notes,
  };
}

export function selectNote(note: NoteItem) {
  return {
    type: action.NOTE_SELECTED,
    note: note
  };
}

export function updateNote(note: NoteItem) {
  return {
    type: action.NOTE_SELECTED,
    note: note
  };
}
