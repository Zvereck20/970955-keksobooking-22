import {
  createSecondaryMarkers
} from './leaflet-map.js';
const FIlTERS = document.querySelector('.map__filters');

const HOUSING_TYPE = document.querySelector('#housing-type');
const HOUSING_PRICE = document.querySelector('#housing-price');
const HOUSING_ROOMS = document.querySelector('#housing-rooms');
const HOUSING_QUESTS = document.querySelector('#housing-guests');
const HOUSING_FEATURES = document.querySelector('#housing-features');

const HOUSING_FEATURES_COLLECTIONS = HOUSING_FEATURES.querySelectorAll('.map__checkbox');

const ANY_VALUE = 'any';

const LOW = 10000;
const MIDDLE = 50000;

const Values = {
  LOW: 'low',
  MIDDLE: 'middle',
  HIGH: 'high',
};

const addHousingValue = (collections) => {
  if (HOUSING_TYPE.value === ANY_VALUE) {
    return collections;
  } else {
    return collections.filter((element) => element.offer.type === HOUSING_TYPE.value);
  }
};

const addPriceValue = (collections) => {
  if (HOUSING_PRICE.value === Values.LOW) {
    return collections.filter((element) => element.offer.price < LOW);
  } else if (HOUSING_PRICE.value === Values.MIDDLE) {
    return collections.filter((element) => {
      if ((element.offer.price >= LOW) && (element.offer.price < MIDDLE)) {
        return element.offer.price;
      }
    })
  } else if (HOUSING_PRICE.value === Values.HIGH) {
    return collections.filter((element) => element.offer.price >= MIDDLE);
  } else {
    return collections;
  }
};

const addRoomsValue = (collections) => {
  if (HOUSING_ROOMS.value === ANY_VALUE) {
    return collections;
  } else {
    return collections.filter((element) => element.offer.rooms == HOUSING_ROOMS.value);
  }
};

const addQuestsValue = (collections) => {
  if (HOUSING_QUESTS.value === ANY_VALUE) {
    return collections;
  } else {
    return collections.filter((element) => element.offer.guests == HOUSING_QUESTS.value);
  }
};

const addFeatures = (featuresCollection, collections) => {
  const result = [];
  const checkedFeatures = Array.from(featuresCollection)
    .map((i) => i.checked && i.value)
    .filter(Boolean);
  if (!checkedFeatures.length) {
    return collections;
  }
  collections.forEach((c) => {
    checkedFeatures.every((i) => c.offer.features.indexOf(i) !== -1) &&
      result.push(c);
  });
  return result;
};

const setData = (collections) => {

  FIlTERS.addEventListener('change', () => {
    const TOTAL_HOUSING = addHousingValue(collections);
    const TOTAL_PRICE = addPriceValue(TOTAL_HOUSING);
    const TOTAL_ROOMS = addRoomsValue(TOTAL_PRICE);
    const TOTAL_QUESTS = addQuestsValue(TOTAL_ROOMS);
    const TOTAL_FEATURES = addFeatures(HOUSING_FEATURES_COLLECTIONS, TOTAL_QUESTS);

    createSecondaryMarkers(TOTAL_FEATURES);
  });
};

export {
  setData
};
