import { elements } from "../base";

export const getInput = () => elements.searchField.value;

export const clearInput = () => {
  elements.searchField.value = "";
};

export const clearResults = () => {
  elements.searchResList.innerHTML = "";
};

const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${newTitle.join(" ")} ...`;
  }
  return title;
};

const renderRecipe = (recipe, index) => {
  const markup = `
    <li>
      <a class="results__link" href="#${index}">
        <figure class="results__fig">
            <img src="${recipe.image}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitRecipeTitle(recipe.label)}</h4>
            <p class="results__author">${recipe.source}</p>
        </div>
      </a>
    </li>
  `;
  elements.searchResList.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = recipes => {
  recipes.map(item => item.recipe).forEach(renderRecipe);
};
