import axios from "axios";
// axios.defaults.baseURL = "https://jshack.top:3033";
axios.defaults.baseURL = "http://localhost:3030";

async function getData(types) {
  return await axios({
    url: `/product/query?types=${types}`,
  });
}

export default getData;
