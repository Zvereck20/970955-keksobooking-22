/* eslint-disable indent */
/* global L:readonly */
import {
  createPopupElement
} from './generating-markup.js';
import {
  getArray
} from './data.js';

const ADDRRES_OF_COORDINATES = document.querySelector('#address');
let LOUD_MAP = false;

// Создаем и отрисовываем карту

const createMap = L.map('map-canvas')
  .on('load', () => {
    LOUD_MAP = true;
    ADDRRES_OF_COORDINATES.value = '35.68950, 139.69171';
  })
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(createMap);

// Добавляем иконку главного маркера

const createMainIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

// Создаем главный маркер

const createMainMarker = L.marker({
  lat: 35.68950,
  lng: 139.69171,
}, {
  draggable: true,
  icon: createMainIcon,
})

createMainMarker.addTo(createMap);

// Добавляем обработчик события на главный мракер для отображения координат

createMainMarker.on('moveend', (evt) => {
  const COORDINATES = evt.target.getLatLng();
  ADDRRES_OF_COORDINATES.value = `${COORDINATES.lat.toFixed(5)}, ${COORDINATES.lng.toFixed(5)}`;
  ADDRRES_OF_COORDINATES.setAttribute('value', `${COORDINATES.lat.toFixed(5)}, ${COORDINATES.lng.toFixed(5)}`);
  // console.log(ADDRRES_OF_COORDINATES);
});

// Показывает маркер и балун одного случайно сгенерированного обьявления

const MARKERS = getArray();

MARKERS.forEach((element) => {
  const lat = element.location.x;
  const lng = element.location.y;

  const createSecondaryMarkers = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const secondaryMarkers = L.marker({
    lat,
    lng,
  }, {
    createSecondaryMarkers,
  },
  );

  secondaryMarkers
    .addTo(createMap)
    .bindPopup(
      createPopupElement(element),
      {
        keepInView: true,
      },
    );
});

export {
  LOUD_MAP
};
