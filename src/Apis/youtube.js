import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY.slice(1, 40);

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
