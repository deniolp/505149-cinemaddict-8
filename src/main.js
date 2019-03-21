import {Filter} from './filter';
import getCards from './get-cards';
import renderCards from './render-cards';

const FILTERS = [
  {
    name: `All`,
    hasAmount: false,
    isActive: true
  },
  {
    name: `Watchlist`
  },
  {
    name: `History`
  },
  {
    name: `Favorites`
  },
  {
    name: `Stats`,
    hasAmount: false,
    isAdditional: true
  }
];

const initialCards = getCards(7);

const filtersContainer = document.querySelector(`.main-navigation`);
const cinemaCardsContainer = document.querySelector(`.films-list__container`);
const topRatedContainer = document.querySelector(`section.films-list--extra .films-list__container`);
const mostCommentedContainer = document.querySelector(`section.films-list--extra:last-of-type .films-list__container`);

const updateCard = (cardToUpdate, newCard) => {
  const index = initialCards.findIndex((item) => item === cardToUpdate);

  for (const key of Object.keys(newCard)) {
    if (key in initialCards[index] && newCard[key] !== ``) {
      initialCards[index][key] = newCard[key];
    }
  }

  return initialCards[index];
};

FILTERS.forEach((item) => {
  const filterComponent = new Filter(item.name, item.hasAmount, item.isActive, item.isAdditional);
  filtersContainer.appendChild(filterComponent.render());

  filterComponent.onFilter = () => {

  };
});

initialCards.forEach((item) => renderCards(item, cinemaCardsContainer));

getCards(2).forEach((item) => renderCards(item, topRatedContainer, false));

getCards(2).forEach((item) => renderCards(item, mostCommentedContainer, false));

export {updateCard};
