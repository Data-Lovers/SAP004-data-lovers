import { searchIcon, searchFilter, search, menuOpen, menuNav, menuClose } from './selectors.js'

searchIcon.addEventListener('click', () => search.focus());

search.addEventListener('focusin', () => searchFilter.classList.add('animate--show'));

search.addEventListener('blur', () => searchFilter.classList.remove('animate--show'));


menuOpen.addEventListener('click', () => menuNav.classList.add('menu--show'));

menuClose.addEventListener('click', () => menuNav.classList.remove('menu--show'));
