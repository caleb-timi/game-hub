import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8bc61080637e4e7aab697b66f98a8bcc",
  },
});
