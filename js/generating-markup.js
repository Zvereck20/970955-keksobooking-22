/* eslint-disable no-unused-vars */
import {
  getArray
} from './data.js';

import {
  makeElement
} from './utils.js';

import {
  PHOTOS
} from './create-object.js'

const POPUP = document.querySelector('#card').content.querySelector('.popup');
const MAP_PLACE = document.querySelector('.map__canvas');

const createListFeatures = () => {
  const listFragment = document.createDocumentFragment();
  const WIFI = makeElement('li', 'popup__feature--wifi');
  listFragment.appendChild(WIFI);
  const DISHWASHER = makeElement('li', 'popup__feature--dishwasher');
  listFragment.appendChild(DISHWASHER);
  const PARKING = makeElement('li', 'popup__feature--parking');
  listFragment.appendChild(PARKING);
  const WASHER = makeElement('li', 'popup__feature--washer');
  listFragment.appendChild(WASHER);
  const ELEVATOR = makeElement('li', 'popup__feature--elevator');
  listFragment.appendChild(ELEVATOR);
  const CONDITIONER = makeElement('li', 'popup__feature--conditioner');
  listFragment.appendChild(CONDITIONER);

  return listFragment;
};

const FEATURES_LIST = createListFeatures();

const photoElement = (address) => {
  const ELEMENT = POPUP.querySelector('.popup__photo');
  const PHOTO = ELEMENT.cloneNode(true);
  PHOTO.src = address;

  return PHOTO;
};

const createListPhotos = (array) => {
  const listFragment = document.createDocumentFragment();
  const FIRST_PICTURE = photoElement(array[0]);
  listFragment.appendChild(FIRST_PICTURE);
  const SECOND_PICTURE = photoElement(array[1]);
  listFragment.appendChild(SECOND_PICTURE);
  const THIRD_PICTURE = photoElement(array[2]);
  listFragment.appendChild(THIRD_PICTURE);

  return listFragment;
};

const PHOTO_LIST = createListPhotos(PHOTOS);

const createPopup = getArray();

createPopup.forEach((element) => {
  const POPUP_ELEMENT = POPUP.cloneNode(true);

  POPUP_ELEMENT.querySelector('.popup__title').textContent = element.offer.title;
  POPUP_ELEMENT.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;
  POPUP_ELEMENT.querySelector('.popup__type').textContent = element.offer.type;
  POPUP_ELEMENT.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.quests} гостей`;
  POPUP_ELEMENT.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
  POPUP_ELEMENT.querySelector('.popup__features').appendChild(FEATURES_LIST);
  POPUP_ELEMENT.querySelector('.popup__description').textContent = element.offer.description;
  POPUP_ELEMENT.querySelector('.popup__photo').remove();
  POPUP_ELEMENT.querySelector('.popup__photos').appendChild(PHOTO_LIST);
  POPUP_ELEMENT.querySelector('.popup__avatar').src = element.author.avatar;

  MAP_PLACE.appendChild(POPUP_ELEMENT);
});
