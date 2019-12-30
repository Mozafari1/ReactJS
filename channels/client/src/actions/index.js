// This is action creator
import channels from '../apis/Channels';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_CHANNEL,
  FETCH_CHANNELS,
  FETCH_CHANNEL,
  DELETE_CHANNEL,
  EDIT_CHANNEL
} from './types';
import history from '../history';
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createChannel = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await channels.post('/channels', { ...formValues, userId });
  dispatch({
    type: CREATE_CHANNEL,
    payload: response.data
  });
  // Progmatic navigation => send the user back to the root when the channel is create successfully
  history.push('/');
};

export const fetchChannels = () => async (dispatch) => {
  const response = await channels.get('/channels');
  dispatch({
    type: FETCH_CHANNELS,
    payload: response.data
  });
};
export const fetchChannel = (id) => async (dispatch) => {
  const response = await channels.get(`/channels/${id}`);
  dispatch({
    type: FETCH_CHANNEL,
    payload: response.data
  });
};

export const editChannel = (id, formValues) => async (dispatch) => {
  const response = await channels.patch(`/channels/${id}`, formValues);
  dispatch({
    type: EDIT_CHANNEL,
    payload: response.data
  });
  history.push('/');
};
export const deleteChannel = (id) => async (dispatch) => {
  await channels.delete(`/channels/${id}`);
  dispatch({
    type: DELETE_CHANNEL,
    payload: id
  });
  history.push('/');
};
