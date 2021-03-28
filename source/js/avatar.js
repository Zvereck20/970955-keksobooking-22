// Фотография для карты
const AVATAR_IMG = document.querySelector('.ad-form-header__input');
const PREVIEW = document.querySelector('.ad-form-header__preview');
const PREVIEW_IMG = PREVIEW.querySelector('img');

// Фотография жилья
const HOUSING_IMG = document.querySelector('.ad-form__input');
const HOUSING_PHOTO = document.querySelector('.ad-form__photo');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const displayFile = (object, img) => {

  const file = object.files[0];
  const fileName = file.name.toLowerCase();


  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      img.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
}

AVATAR_IMG.addEventListener('change', () => {

  displayFile(AVATAR_IMG, PREVIEW_IMG)
});

const createImage = new Image(70, 70);
createImage.alt = 'Фотография жилья';

HOUSING_IMG.addEventListener('change', () => {

  displayFile(HOUSING_IMG, createImage);
  HOUSING_PHOTO.appendChild(createImage);
});

const removeImage = () => {
  HOUSING_PHOTO.innerHTML = '';
};


export {
  PREVIEW_IMG,
  removeImage
}
