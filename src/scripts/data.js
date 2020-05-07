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
