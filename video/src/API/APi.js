import axios from 'axios';

const KEY = 'AIzaSyC9FG9ZudX732azBhNmfPpZSbAP3U7LBTs';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
});
