import Search from "./models/Search";
import { elements } from "./base";

/*
1 - Search Object
2 - Recipe Object
3 - Shopping list object
4 - Liked recipes
*/
const state = {};

const controlSearch = async e => {
  e.preventDefault();
  const query = elements.searchField.value;
  if (query) {
    state.search = new Search(query);

    await state.search.getResults();

    console.log(state.search.result);
  }
};

elements.search.addEventListener("submit", controlSearch);
