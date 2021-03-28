/* global L:readonly */
import {
  createPopupElement
} from './generating-markup.js';

const ADDRRES_OF_COORDINATES = document.querySelector('#address');

const POPUP_ELEMENT_COUNT = 10;

// Создаем и отрисовываем карту

const createMap = L.map('map-canvas')
  .on('load', () => {
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
  const coordinates = evt.target.getLatLng();
  ADDRRES_OF_COORDINATES.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
  ADDRRES_OF_COORDINATES.setAttribute('value', `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`);
});

let markersLayer = new L.LayerGroup();

const createSecondaryMarkers = (array) => {

  const displayArray = array.slice(0, POPUP_ELEMENT_COUNT);
  clearAds();
  displayArray.forEach((element) => {
    const lat = element.location.lat;
    const lng = element.location.lng;

    const createSecondaryMarkersIcon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const secondaryMarkers = L.marker({
      lat,
      lng,
    }, {
      createSecondaryMarkersIcon,
    });
    markersLayer.addLayer(secondaryMarkers);
    secondaryMarkers.bindPopup(createPopupElement(element), {
      keepInView: true,
    });
  });
  markersLayer.addTo(createMap);
};

const clearAds = () => {
  markersLayer.clearLayers();
};

const resetMainMarkerPosition = () => {
  createMainMarker.setLatLng({
    lat: 35.6895,
    lng: 139.69171,
  });
};

export {
  ADDRRES_OF_COORDINATES,
  resetMainMarkerPosition,
  createSecondaryMarkers
};
