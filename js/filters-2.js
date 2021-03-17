import {
  createSecondaryMarkers
} from './leaflet-map.js';
const FIlTERS = document.querySelector('.map__filters');

const HOUSING_TYPE = document.querySelector('#housing-type');
const HOUSING_PRICE = document.querySelector('#housing-price');
const HOUSING_ROOMS = document.querySelector('#housing-rooms');
const HOUSING_QUESTS = document.querySelector('#housing-quests');
const HOUSING_FEATURES = document.querySelector('#housing-features');



const setData = (collections) => {

  FIlTERS.addEventListener('change', () => {
    let rem = [];
    // let rom = [];
    // addFilters(collection.slice(), mem, rom);
    console.log('col', collections);

    // rem = collections.filter((element) => {
    //   element.forEach((euce) => {
    //     euce.offer.type = HOUSING_TYPE.value;

    //   })
    // })

    let rom;
    const mem = collections.filter((element) => {
      rom = element;

      for (let i = 0; i <= 10; i++) {
        console.log('1', rom[0]);
        // if (rom.offer.house === HOUSING_TYPE.value) {
        //   console.log('1', rom);
        //   return rom
        // }
      }

      // console.log('2', rom)
    });



    // collections.forEach((element) => {
    //   rem = element.filter((element) => {
    //     element.offer.type === HOUSING_TYPE.nodeValue;
    //   })
    //   return rem
    // })


    console.log('mem', mem);

  })

};




export {
  setData
};
