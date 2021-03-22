// Фотография для карты
const AVATAR_IMG = document.querySelector('.ad-form-header__input');
const PREVIEW = document.querySelector('.ad-form-header__preview');
const PREVIEW_IMG = PREVIEW.querySelector('img');

// Фотография жилья
// const HOUSING_IMG = document.querySelector('.ad-form__input');
// const HOUSING_PHOTO = document.querySelector('.ad-form__photo');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

AVATAR_IMG.addEventListener('change', () => {
  const FILE = AVATAR_IMG.files[0];
  const fileName =  FILE.name.toLowerCase();


  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const READER = new FileReader();

    READER.addEventListener('load', () => {
      PREVIEW_IMG.src = READER.result;
    });

    READER.readAsDataURL(FILE);
  }
});
