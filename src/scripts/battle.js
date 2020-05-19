import { getNumberOfEpisodes } from './data.js';
import { battleOne, battleTwo } from './selectors.js'

let selectedCharacterOne = null;
let selectedCharacterTwo = null;
const battleCharactersOne = 'battleCharactersOne';
const battleCharactersTwo = 'battleCharactersTwo';

function setCharacterScore(parentId, score) {
    if (parentId === battleCharactersOne){
        battleOne.innerHTML = score;
    } else {
        battleTwo.innerHTML = score;
    }
}

function removeSelectedClass(parentId) {
    const selecteds = document.querySelectorAll (`#${parentId} .selected`)
    selecteds.forEach((selected) =>{
        selected.classList.remove('selected')
    })
}

function renderBattleCharacters (battleCharacters, elementId){
    const battleContainer = document.getElementById(elementId);

    battleCharacters.forEach((character) => {
        const listBatle = document.createElement('li')
        listBatle.dataset.id = character.id;
        listBatle.classList.add('battle')
        listBatle.innerHTML = `<img src="${character.image}" alt="${character.image}" class="battle-image" id="${elementId}-${character.id}">`
        battleContainer.appendChild(listBatle)
        listBatle.addEventListener('click', (event) => {
            if (elementId === battleCharactersOne){
                selectedCharacterOne = event.currentTarget.dataset.id;
                const score = getNumberOfEpisodes(battleCharacters, selectedCharacterOne);
                setCharacterScore (elementId, score);
            } else {
                selectedCharacterTwo = event.currentTarget.dataset.id;
                const score = getNumberOfEpisodes(battleCharacters, selectedCharacterTwo);
                setCharacterScore (elementId, score);
            }
            removeSelectedClass(elementId)
            event.currentTarget.classList.add('selected');
        })
    })
}

export function renderBattle (battleCharacters){
    renderBattleCharacters(battleCharacters, battleCharactersOne);
    renderBattleCharacters(battleCharacters, battleCharactersTwo);
}
