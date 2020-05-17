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

export function rickByStatus (data) {
  const initialValue = { 
    alive:  0,
    dead:0,
    unknown:0
  }
  function groupRicks (accumulator, current){
    if(current.name.includes('Rick')){
      if (current.status === 'Alive') {
        accumulator.alive += 1;
      } else if(current.status === 'Dead'){
        accumulator.dead += 1; 
      } else if(current.status === 'unknown'){
        accumulator.unknown += 1;
      }

    }
    return accumulator;
  }
  return data.reduce(groupRicks, initialValue)
}

export function numberOfGenders (data) {
  const initialValue ={
    female: 0,
    male: 0,
    unknown:0,
    genderless: 0,
  }
  function sumGender (accumulator, current){
    if (current.gender === 'Female'){
      accumulator.female += 1;
    } else if(current.gender === 'Male'){
      accumulator.male +=1;
    } else if(current.gender === 'unknown'){
      accumulator.unknown += 1;
    } else if(current.gender === "Genderless"){
      accumulator.genderless += 1;
    }
    return accumulator;
  }
  return data.reduce(sumGender, initialValue)
}