export function filterExact(characters, prop, value) {
  return characters.filter((character) => character[prop] === value);
}

export function filterLike(characters, prop, value) {
  return characters.filter((character) => character[prop].toLowerCase().includes(value.toLowerCase()));
}


export function sortByProp(characters, prop, upOrDown) {
  return characters.sort((current, next) => {
    const az = current[prop] > next[prop];
    const za = current[prop] < next[prop];
    const compare = upOrDown ? az : za;
    return compare ? 1 : -1;
  })
}

export function sumRicksMorty(data) {
  const countRicksMortys = {
    rick: 0,
    morty: 0,
  }

  function groupRicksMorys(accumulator, current) {
    if (current.name.includes('Rick')) {
      accumulator.rick += 1;
    } else if (current.name.includes('Morty')) {
      accumulator.morty += 1;
    }
    return accumulator;
  }

  return data.reduce(groupRicksMorys, countRicksMortys)
}

export function rickByStatus(data) {
  const countRicks = {
    alive: 0,
    dead: 0,
    unknown: 0
  }
  function groupRicks(accumulator, current) {
    if (current.name.includes('Rick')) {
      switch (current.status) {
        case 'Alive':
          accumulator.alive += 1;
          break;
        case 'Dead':
          accumulator.dead += 1;
          break;
        case 'unknown':
          accumulator.unknown += 1;
          break;
      }
    }

    return accumulator;
  }
  return data.reduce(groupRicks, countRicks)
}

export function numberOfGenders(data) {
  const resultStatus = {
    female: 0,
    male: 0,
    unknown: 0,
    genderless: 0,
  }
  function sumGender(accumulator, current) {
    switch (current.gender) {
      case 'Female':
        accumulator.female += 1;
        break;
      case 'Male':
        accumulator.male += 1;
        break;
      case 'unknown':
        accumulator.unknown += 1;
        break;
      case 'Genderless':
        accumulator.genderless += 1;
        break;
    }
    return accumulator;
  }
  return data.reduce(sumGender, resultStatus)
}


export function getNumberOfEpisodes(data, characterId) {
  const numberCharacterId = parseInt(characterId, 10)

  const selectedCharacter = data.find((character) => {
    return character.id === numberCharacterId;
  })
  const totalEpisodes = selectedCharacter.episode.length;
  return totalEpisodes;
}
