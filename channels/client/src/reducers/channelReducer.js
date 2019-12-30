import _ from 'lodash';
import {
  CREATE_CHANNEL,
  FETCH_CHANNELS,
  FETCH_CHANNEL,
  DELETE_CHANNEL,
  EDIT_CHANNEL
} from '../actions/types';
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CHANNEL:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_CHANNEL:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_CHANNEL:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_CHANNEL:
      return _.omit(state, action.payload);
    case FETCH_CHANNELS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
};
