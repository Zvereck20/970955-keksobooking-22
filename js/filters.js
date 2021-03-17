/* eslint-disable no-console */
import {
  createSecondaryMarkers
} from './leaflet-map.js';

const FIlTERS = document.querySelector('.map__filters');

const HOUSING_TYPE = document.querySelector('#housing-type');
const HOUSING_PRICE = document.querySelector('#housing-price');
const HOUSING_ROOMS = document.querySelector('#housing-rooms');
const HOUSING_QUESTS = document.querySelector('#housing-quests');
// const HOUSING_FEATURES = document.querySelector('#housing-features');

const LOW = 10000;
const MIDDLE = 50000;

// Функция фильтра

const addPrice = (incomingArray, returnArray) => {
  if (HOUSING_PRICE.value === 'low') {
    incomingArray.forEach((element) => {
      if (element.offer.price < LOW) {
        returnArray.push(element);
      }

    });
  } else if (HOUSING_PRICE.value === 'middle') {
    incomingArray.forEach((element) => {
      if ((element.offer.price >= LOW) && (element.offer.price < MIDDLE)) {
        returnArray.push(element);
      }

    });
  } else if (HOUSING_PRICE.value === 'high') {
    incomingArray.forEach((element) => {
      if (element.offer.price >= MIDDLE) {
        returnArray.push(element);
      }

    });
  }
  // } else if (HOUSING_PRICE.value === 'any') {
  //   returnArray = incomingArray;
  // }


  incomingArray.length = 0;

  return returnArray, incomingArray;
};

const addRooms = (incomingArray, returnArray) => {

  incomingArray.forEach((element) => {
    if (element.offer.rooms == HOUSING_ROOMS.value) {
      returnArray.push(element);
    }
  });

  incomingArray.length = 0;

  return returnArray, incomingArray;
};

const addQuests = (incomingArray, returnArray) => {

  incomingArray.forEach((element) => {
    if (element.offer.guests == HOUSING_QUESTS.value) {
      returnArray.push(element);
    }
  });

  incomingArray.length = 0;

  return returnArray, incomingArray;
};

//  1. собираем данные пользователя
//  2. выбираем подходящие данные из collection и записываем в новый массив
//  3. отрисовываем метки на основе нового массива данных / createSecondaryMarkers(array)
// };

// Обработчик фильтра

const setData = (collection) => {
  // data = collection;
  FIlTERS.addEventListener('change', () => {
    let mem = [];
    let rom = [];
    collection.forEach((element) => {
      if (element.offer.type === HOUSING_TYPE.value) {
        mem.push(element);
      }
      // } mem = collection;
    });
    // createSecondaryMarkers(mem);
    addPrice(mem, rom);
    addRooms(rom, mem);
    // addQuests(mem, rom);

    console.log('mem', mem);
    console.log('rom', rom);



    //     // addRooms(returnArray, returnArray);
    //   } else {
    //     addPrice(collection, rom);
    //   }
    // })
  })
};


export {
  setData
};
