/* global Chart */
import { getCharacters } from '../data/rickandmorty.js'
import { buildHTML } from './createCard.js'
import { allCharacters, gendersFilter, search, speciesFilter, sortByNameUp, sortByNameDown, statusFilter, cardsBox } from './selectors.js'
import { createFilter, getOptions } from './createFilters.js';
import { renderBattle } from './battle.js';
import battleCharacters from '../data/battle.js'
import { filterExact, filterLike, sortByProp, rickByStatus, numberOfGenders, sumRicksMorty } from './data.js';

function buildFilter(data, parentElement, type) {
  const options = getOptions(data, type);

  createFilter(parentElement, options, (option) => {
    let characterFiltered = filterExact(data, type, option);
    buildHTML(cardsBox, characterFiltered);
  })
}

function sortCharacter(data, prop, upOrDown) {
  let sorted = sortByProp(data, prop, upOrDown);
  buildHTML(cardsBox, sorted);
}

function searchCharacter(data) {
  let listCharacters = filterLike(data, 'name', event.target.value);
  buildHTML(cardsBox, listCharacters);
}

getCharacters().then(characters => {
  search.addEventListener('input', searchCharacter.bind(null, characters));
  allCharacters.addEventListener('click', sortCharacter.bind(null, characters, 'id', true));
  sortByNameUp.addEventListener('click', sortCharacter.bind(null, characters, 'name', true));
  sortByNameDown.addEventListener('click', sortCharacter.bind(null, characters, 'name', false));

  buildFilter(characters, speciesFilter, 'species');
  buildFilter(characters, gendersFilter, 'gender');
  buildFilter(characters, statusFilter, 'status');

  buildHTML(cardsBox, characters);

  rickStatusChart(characters);
  sumRicksMortysChart(characters)
  genderStatus(characters)
});

function rickStatusChart(data) {
  const ctx = document.getElementById('pie-chart').getContext('2d');
  const ricks = rickByStatus(data)
  const chartData = {
    datasets: [{
      data: [ricks.alive, ricks.dead, ricks.unknown],
      options: [
      ],
      backgroundColor: ["rgb(157,219,221)", "rgb(158, 222, 160)", "rgb(160, 158, 222)"],

    }],

    labels: [
      'Alive',
      'Dead',
      'Unknown'
    ]

  };

  const chart = new Chart(ctx, {
    type: 'pie',
    data: chartData,
    options: {
      legend: {
        layout: {
          padding: 10,
        },
        labels: {
          fontColor: "rgba(255, 255, 255)",
        }

      },
      tooltips: createTooltips()
    }
  });
  return chart;
}

function sumRicksMortysChart(data) {
  const ctx = document.getElementById('sum-pie').getContext('2d');
  const person = sumRicksMorty(data);

  const chartData = {
    datasets: [{
      data: [person.rick, person.morty],
      backgroundColor: ["rgb(157,219,221)", "rgb(158, 222, 160)"],
    }],

    labels: [
      'Rick',
      'Morty',

    ],
  };

  const chart = new Chart(ctx, {
    type: 'pie',
    data: chartData,
    options: {
      legend: {
        layout: {
          padding: 10,
        },
        labels: {
          fontColor: "rgba(255, 255, 255)",
        }
      },
      tooltips: createTooltips()
    }
  });
  return chart;
}

function genderStatus(data) {
  const ctx = document.getElementById('chart-pie').getContext('2d');
  const gender = numberOfGenders(data);

  const chartDataGender = {
    datasets: [{
      data: [gender.female, gender.male, gender.unknown, gender.genderless],
      options: [
      ],
      backgroundColor: ["rgb(232,69,168)", "rgb(33,158,184)", "rgb(245,247,118)", "rgb(242,83,82)"],

    }],

    labels: [
      'Female',
      'Male',
      'Unknown',
      'Gendeless'
    ],
  };


  const chart = new Chart(ctx, {
    type: 'pie',
    data: chartDataGender,
    options: {
      legend: {
        layout: {
          padding: 10,
        },
        labels: {
          fontColor: "rgba(255, 255, 255)",
          display: "table-row",
        }
      },
      tooltips: createTooltips()
    }
  });
  return chart;
}

function createTooltips() {
  const tooltips = {
    callbacks: {
      label: function (tooltipItem, data) {
        const sum = data.datasets[0].data.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        });

        const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
        const percentage = Number((value / sum) * 100).toFixed(2);
        const label = `${data.labels[tooltipItem.index]}: ${percentage}%`
        return label;
      }
    }
  }

  return tooltips;
}

renderBattle(battleCharacters)
