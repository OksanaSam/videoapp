import axios from "axios";

const KEY = "AIzaSyC7RBajlDUC6UfyFuGGERn46dg2WSEKETo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
