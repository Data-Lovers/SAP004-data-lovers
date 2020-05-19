import { filterExact, filterLike, sortByProp, sumRicksMorty, numberOfGenders, rickByStatus, getNumberOfEpisodes } from '../src/scripts/data.js';

import { expect } from 'chai';

const character = [
  { name: "Morty" },
  { name: "Rick" }
];

describe('filter exact', () => {
  it('filter exact', () => {
    expect(filterExact(character, 'name', 'Morty')).to.deep.equal([character[0]]);
  });
});

describe('filter like', () => {
  it('filter like', () => {
    expect(filterLike(character, 'name', 'mor')).to.deep.equal([character[0]]);
  });
});

describe('sort', () => {
  it('a-z', () => {
    expect(sortByProp(character, 'name', false)).to.deep.equal([{"name": "Rick"}, {"name": "Morty"}]);
  });
  it('z-a', () => {
    expect(sortByProp(character, 'name', true)).to.deep.equal([{"name": "Morty"}, {"name": "Rick"}]);
  });
});

describe ('sumRicksMorty', () => {
  it('is a function', () => {
    expect(typeof sumRicksMorty).to.equal('function')
  })
  it('deve somar os ricks e os mortys', () => {
    const dataRickMortys = [
      {
        name:'Rick Sanches',
      },
      {
        name: 'Rick Oitavo'
      },
      {
        name: 'Chico Rick',
      },
      {
        name: 'Morty',
      }
    ]
    const result = sumRicksMorty(dataRickMortys);
    expect(result.rick).to.equal(3);
    expect(result.morty).to.equal(1);
  })
})

describe ('numberOfGenders', () => {
  it ('is a function', () => {
    expect(typeof numberOfGenders).to.equal('function')
  })
  it('deve somar por genero', ()=>{
    const dataGender =[
      {
        gender: 'Male',
      },
      {
        gender: 'Male',
      },
      {
        gender: 'Female',
      },
      {
        gender: 'unknown',
      },
    ]
    const result = numberOfGenders(dataGender);
    expect(result.male).to.equal(2);
    expect(result.female).to.equal(1);
    expect(result.unknown).to.equal(1);
  })
})

describe ('rickByStatus', () => {
  it('is a function', () => {
    expect(typeof rickByStatus).to.equal('function')
  })
  it('deve contar os ricks por status', () => {
    const dataStatus = [
      {
        name:'Rick Sanches',
        status: 'Alive',
      },
      {
        name: 'Rick Oitavo',
        status: 'Dead',
      },
      {
        name: 'Chico Rick',
        status: 'unknown'
      },
      {
        name: 'Morty',
        status: 'Alive',
      }
    ]
    const result = rickByStatus(dataStatus);
    expect(result.alive).to.equal(1);
    expect(result.dead).to.equal(1);
    expect(result.unknown).to.equal(1);
  })
})

describe ('getNumberOfEpisodes', () => {
  it('is a function', () => {
    expect(typeof getNumberOfEpisodes).to.equal('function')
  })
  it('deve somar os episodios dos personagens', () => {
    const dataEpisodes = [
      {
        id:1,
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
        ]
      },
    ]
    const result = getNumberOfEpisodes(dataEpisodes, 1);
    expect(result).to.equal(3);
  })
})




