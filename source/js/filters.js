/* global _:readonly */
import {
  createSecondaryMarkers
} from './leaflet-map.js';
const FIlTERS = document.querySelector('.map__filters');

const HOUSING_TYPE = document.querySelector('#housing-type');
const HOUSING_PRICE = document.querySelector('#housing-price');
const HOUSING_ROOMS = document.querySelector('#housing-rooms');
const HOUSING_GUESTS = document.querySelector('#housing-guests');
const HOUSING_FEATURES = document.querySelector('#housing-features');
const HOUSING_FEATURES_COLLECTIONS = HOUSING_FEATURES.querySelectorAll('.map__checkbox');
const ANY_VALUE = 'any';

const RENTS_MAX = 10;

let dataCollection = [];

const setCollections = (data) => {
  dataCollection = data;
  return dataCollection;
};

const cleanFilters = () => {
  HOUSING_TYPE.value = ANY_VALUE;
  HOUSING_PRICE.value = ANY_VALUE;
  HOUSING_ROOMS.value = ANY_VALUE;
  HOUSING_GUESTS.value = ANY_VALUE;
  HOUSING_FEATURES_COLLECTIONS.forEach((element) => {
    element.checked = false;
  });
  createSecondaryMarkers(dataCollection);
}

const LOW = 10000;
const MIDDLE = 50000;

const Values = {
  LOW: 'low',
  MIDDLE: 'middle',
  HIGH: 'high',
};

const RERENDER_DELAY = 500;

const addHousingValue = (collections) => {
  if (HOUSING_TYPE.value === ANY_VALUE) {
    return collections;
  }
  return collections.offer.type === HOUSING_TYPE.value;
};

const addPriceValue = (collections) => {
  if (HOUSING_PRICE.value === Values.LOW) {
    return collections.offer.price < LOW;
  } else if (HOUSING_PRICE.value === Values.MIDDLE) {
    return collections.offer.price >= LOW && collections.offer.price <= MIDDLE;
  } else if (HOUSING_PRICE.value === Values.HIGH) {
    return collections.offer.price >= MIDDLE;
  }
  return collections;
};

const addRoomsValue = (collections) => {
  if (HOUSING_ROOMS.value === ANY_VALUE) {
    return collections;
  }
  return collections.offer.rooms === parseInt(HOUSING_ROOMS.value);
};

const addGuestsValue = (collections) => {
  if (HOUSING_GUESTS.value === ANY_VALUE) {
    return collections;
  }
  return collections.offer.guests === parseInt(HOUSING_GUESTS.value);
};

const addFeatures = (featuresCollection, collections) => {

  const checkedFeatures = Array.from(featuresCollection)
    .map((i) => i.checked && i.value)
    .filter(Boolean);
  if (!checkedFeatures.length) {
    return collections;
  }

  const featuresValue = collections.offer.features;

  for (let i = 0; i <= featuresValue.length - 1; i++) {
    if (checkedFeatures.every((i) => featuresValue.indexOf(i) !== -1)) {

      return featuresValue;
    }
  }
};



const setData = (collection) => {
  FIlTERS.addEventListener('change', _.debounce(() => {

    const mem = (element) => {
      return (
        addHousingValue(element) &&
        addPriceValue(element) &&
        addRoomsValue(element) &&
        addGuestsValue(element) &&
        addFeatures(HOUSING_FEATURES_COLLECTIONS, element)
      );
    };

    let filteredRents = [];

    for (let element of collection) {
      if (mem(element)) {
        filteredRents.push(element);
      }
      if (filteredRents >= RENTS_MAX) {
        break;
      }
    }
    createSecondaryMarkers(filteredRents);
  }, RERENDER_DELAY));
};

export {
  setData,
  cleanFilters,
  setCollections
};
