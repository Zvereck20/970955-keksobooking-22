/* eslint-disable no-unused-vars */
// Функция возвращает целое число

let returnRandomnInteger = (minNumber, maxNumber) => {
  if (minNumber >= maxNumber) {
    return 'Не верно введенные числа'
  }
  return Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
};


// Функция, возвращающая случайное число с плавающей точкой

let returnRandomFractional = (minNumber, maxNumber, anotherNumber = 1) => {
  if (minNumber >= maxNumber) {
    return 'Не верно введенные числа'
  }
  let randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;
  return randomNumber.toFixed(anotherNumber);
};


// Authur object

let authorObject = {
  avatar: () => {
    let randomAdress = '0' + Math.round(Math.random() * (8 - 1) + 1);
    return 'img/avatars/user' + randomAdress + '.png';
  },
};

// Offer object

let offerObject = {
  title: 'Предложения',
  address: '{{location.x}, {location.y}}',
  price: 2800,
  type: 'bungallow',
  rooms: 2,
  quests: 4,
  checkin: '12:00',
  checkout: '13:00',
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: 'Вид на море',
  photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
};

// Location object

let locationObject = {
  randomLatitude: () => {
    let latitudeNumber = Math.random() * (35.70000 - 35.65000) + 35.65000;
    return latitudeNumber.toFixed(5);
  },
  randomLongitude: () => {
    let longitubeNumber = Math.random() * (139.80000 - 139.70000) + 139.70000;
    return longitubeNumber.toFixed(5);
  },
};

//  Generated object
let generatedObject = {
  authorObject: {
    avatar: () => {
      let randomAdress = '0' + Math.round(Math.random() * (8 - 1) + 1);
      return 'img/avatars/user' + randomAdress + '.png';
    },
  },
  offerObject: {
    title: 'Предложения',
    address: '{{location.x}, {location.y}}',
    price: 2800,
    type: 'bungallow',
    rooms: 2,
    quests: 4,
    checkin: '12:00',
    checkout: '13:00',
    features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    description: 'Вид на море',
    photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
  },
  locationObject: {
    randomLatitude: () => {
      let latitudeNumber = Math.random() * (35.70000 - 35.65000) + 35.65000;
      return latitudeNumber.toFixed(5);
    },
    randomLongitude: () => {
      let longitubeNumber = Math.random() * (139.80000 - 139.70000) + 139.70000;
      return longitubeNumber.toFixed(5);
    },
  },
};
