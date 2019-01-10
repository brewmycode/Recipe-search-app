import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./base";

/*
1 - Search Object
2 - Recipe Object
3 - Shopping list object
4 - Liked recipes
*/
const state = {};

const controlSearch = async () => {
  const query = searchView.getInput();
  if (query) {
    state.search = new Search(query);
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    await state.search.getResults();

    clearLoader();
    searchView.renderResults(state.search.result);
    console.log(state.search.result);
  }
};

elements.search.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
