import {getNumberOfEpisodes} from './data.js';

let selectedCharacter1 = null;
let selectedCharacter2 = null;
const battleCharacters1 = 'battleCharacters1';
const battleCharacters2 = 'battleCharacters2';

function setCharacterScore(parentId, score) {
    if (parentId === battleCharacters1){
        const score1 = document.getElementById('characterScore1');
        score1.innerHTML = score;
    } else {
        const score2 = document.getElementById('characterScore2');
        score2.innerHTML = score;
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
        const divCharacter = document.createElement('div')
        divCharacter.dataset.id = character.id;
        divCharacter.classList.add('battle')
        divCharacter.innerHTML = `<img src="${character.image}" alt="${character.image}" class="battle-image" id="${elementId}-${character.id}">`
        battleContainer.appendChild(divCharacter)
        divCharacter.addEventListener('click', (event) => {
            if (elementId === battleCharacters1){
                selectedCharacter1 = event.currentTarget.dataset.id;
                const score = getNumberOfEpisodes(battleCharacters, selectedCharacter1);
                setCharacterScore (elementId, score);
            } else {
                selectedCharacter2 = event.currentTarget.dataset.id;
                const score = getNumberOfEpisodes(battleCharacters, selectedCharacter2);
                setCharacterScore (elementId, score);
            }
            removeSelectedClass(elementId)
            event.currentTarget.classList.add('selected');
        })
    })
}

export function renderBattle (battleCharacters){
    renderBattleCharacters(battleCharacters, battleCharacters1);
    renderBattleCharacters(battleCharacters, battleCharacters2);
}