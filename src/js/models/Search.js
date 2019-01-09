import { config } from "../config";

class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const url = `https://api.edamam.com/search?q=${this.query}&app_id=${
      config.id
    }&app_key=${config.key}&from=0&to=3`;
    try {
      const res = await axios(url);
      this.result = res.data.hits;
    } catch (error) {
      console.log(error);
    }
  }
}

export default Search;
