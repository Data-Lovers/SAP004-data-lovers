const qs = (selector) => document.querySelector(selector);

const allCharacters = qs('#allCharacters');
const cardsBox = qs('#cards-box');
const gendersFilter = qs('#gendersFilter');
const search = qs('#search');
const sortByNameUp = qs('#sortByNameUp');
const sortByNameDown = qs('#sortByNameDown');
const speciesFilter = qs('#speciesFilter');
const statusFilter = qs('#statusFilter');

const searchFilter = qs('#search-filter');
const searchIcon = qs('#search-icon');
const searchNave = qs('#search-nave');

const menuClose = qs('#menu-close');
const menuNav = qs('#menu-nav');
const menuOpen = qs('#menu-open');

const mainAbout = qs('#mainly-about');
const mainCards = qs('#mainly-cards');
const mainCuriosities = qs('#mainly-curiosities');

const about = qs('#about');
const home = qs('#home');
const curiosities = qs('#curiosities');
const menuFilter = qs('#menu-filter');

const battleOne = qs('#characterScoreOne');
const battleTwo = qs('#characterScoreTwo');



export {
  about,
  allCharacters,
  battleOne,
  battleTwo,
  cardsBox,
  curiosities,
  gendersFilter,
  home,
  mainAbout,
  mainCards,
  menuClose,
  mainCuriosities,
  menuFilter,
  menuNav,
  menuOpen,
  search,
  searchFilter,
  searchIcon,
  searchNave,
  statusFilter,
  speciesFilter,
  sortByNameUp,
  sortByNameDown
};
