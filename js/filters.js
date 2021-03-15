const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingQuests = document.querySelector('#housing-quests');
const housingFatures = document.querySelector('#housing-features');

let data = [];

const setData = (collection) => {
  data = collection;
  return data;
};

// const filterArray = (collection) => {
//   if ()
// };

const mem = [];
const setTypeChange = () => {
  housingType.addEventListener('change', (evt) => {
    const typeValue = evt.target.value;
    data.forEach((element) => {
      if (element.offer.type === typeValue) {
        mem.push(element);
      }
    })
    console.log('1', mem)
    return mem;
  })
};
console.log('2', mem);

export {
  setData,
  setTypeChange
};
