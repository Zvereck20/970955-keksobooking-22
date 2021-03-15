const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingQuests = document.querySelector('#housing-quests');
const housingFatures = document.querySelector('#housing-features');

// eslint-disable-next-line no-unused-vars
const map = document.querySelector('.map__filters');

// const Type = {
//   HOUSING: [
//     'palace',
//     'flat',
//     'house',
//     'bungalow',
//   ],
// };

const getHousingRank = (userChoice) => {
  let rank = 0;

  if (userChoice === housingType.value) {
    rank += 3;
  }
  if (userChoice === housingPrice.value) {
    rank += 2;
  }
  if (userChoice === housingQuests.value) {
    rank += 2;
  }
  if (userChoice === housingRooms.value) {
    rank += 1;
  }
  if (userChoice === housingFatures.value) {
    rank += 1;
  }
  console.log(rank);
  return rank;
}

const setTypeChange = () => {
  housingType.addEventListener('change', (evt) => {
    const typeValue = evt.target.value;
    console.log(typeValue);
  })
};

setTypeChange();


const sortHousing = (housingRankA, housingRankB) => {
  const rankA = getHousingRank(housingRankA);
  const rankB = getHousingRank(housingRankB);

  return rankB - rankA;
}

export {
  sortHousing
};
