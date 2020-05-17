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

export function sumRicksMorty (data) {
  const initialValue = {
    rick: 0,
    morty: 0,
  }

  function groupRicksMorys  (accumulator, current){ 
    if (current.name.includes('Rick')){
      accumulator.rick += 1;
    } else if (current.name.includes('Morty')){
      accumulator.morty += 1;
    }
    return accumulator;
  }
  
  return data.reduce(groupRicksMorys , initialValue)
}