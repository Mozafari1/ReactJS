import _ from 'lodash';
import API from '../API/API';
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // This can rewrite with chain
  //   const userId = _.uniq(_.map(getState().posts, 'userId'));
  //   userId.forEach((id) => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};
export const fetchPosts = () => async (dispatch) => {
  const response = await API.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await API.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => {
//   // const response = await API.get(`/users/${id}`);
//   // dispatch({ type: 'FETCH_USER', payload: response.data });
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await API.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
