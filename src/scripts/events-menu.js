import { searchIcon, searchFilter, search, menuOpen, menuNav, menuFilter, menuClose, mainCards, mainAbout, mainCuriosities, home, about, curiosities } from './selectors.js'

searchIcon.addEventListener('click', () => search.focus());

search.addEventListener('focusin', () => searchFilter.classList.add('animate--show'));

search.addEventListener('blur', () => searchFilter.classList.remove('animate--show'));


menuOpen.addEventListener('click', () => menuNav.classList.add('menu--show'));

menuClose.addEventListener('click', () => menuNav.classList.remove('menu--show'));

function removeClassActive() {
  mainCuriosities.classList.remove('active');
  mainAbout.classList.remove('active');
  mainCards.classList.remove('active');
  mainCards.classList.add('disable');
  menuFilter.classList.add('disable');
}

home.addEventListener('click', (e) => {
  e.preventDefault();
  removeClassActive();
  mainCards.classList.add('active');
  menuFilter.classList.remove('disable');
  window.history.pushState('home', 'Home', '/home');
})

about.addEventListener('click', (e) => {
  e.preventDefault();
  removeClassActive();
  mainAbout.classList.add('active');
  window.history.pushState('about', 'About', '/about');
})

curiosities.addEventListener('click', (e) => {
  e.preventDefault();
  removeClassActive();
  mainCuriosities.classList.add('active');
  window.history.pushState('curiosities', 'Curiosities', '/curiosities');
})

