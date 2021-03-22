const POPUP = document.querySelector('#card').content.querySelector('.popup');

// Создать список features

const createFeaturesList = (features) => {
  return features
    .map((feature) => `<li class="popup__feature popup__feature--${feature}"></li>`)
    .join('')
};

// Создать список фото

const createPhotoList = (photos) => {
  return photos
    .map((photo) => `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`)
    .join('')
};

// Создать объект

const createPopupElement = (element) => {
  const POPUP_ELEMENT = POPUP.cloneNode(true);

  POPUP_ELEMENT.querySelector('.popup__title').textContent = element.offer.title;
  POPUP_ELEMENT.querySelector('.popup__text--address').textContent = element.offer.address;
  POPUP_ELEMENT.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;
  POPUP_ELEMENT.querySelector('.popup__type').textContent = element.offer.type;
  POPUP_ELEMENT.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
  POPUP_ELEMENT.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
  const FEATURES = POPUP_ELEMENT.querySelector('.popup__features');
  FEATURES.innerHTML = createFeaturesList(element.offer.features);
  POPUP_ELEMENT.querySelector('.popup__description').textContent = element.offer.description;
  const PHOTOS = POPUP_ELEMENT.querySelector('.popup__photos');
  PHOTOS.innerHTML = createPhotoList(element.offer.photos);
  POPUP_ELEMENT.querySelector('.popup__avatar').src = element.author.avatar;

  return POPUP_ELEMENT;
};

export {
  createPopupElement
};
