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
  const popapElement = POPUP.cloneNode(true);

  popapElement.querySelector('.popup__title').textContent = element.offer.title;
  popapElement.querySelector('.popup__text--address').textContent = element.offer.address;
  popapElement.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;
  popapElement.querySelector('.popup__type').textContent = element.offer.type;
  popapElement.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
  popapElement.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
  const features = popapElement.querySelector('.popup__features');
  features.innerHTML = createFeaturesList(element.offer.features);
  popapElement.querySelector('.popup__description').textContent = element.offer.description;
  const photos = popapElement.querySelector('.popup__photos');
  photos.innerHTML = createPhotoList(element.offer.photos);
  popapElement.querySelector('.popup__avatar').src = element.author.avatar;

  return popapElement;
};

export {
  createPopupElement
};
