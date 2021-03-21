const lable = document.querySelector('.ad-form-header__drop-zone');
const userChooser = document.querySelector('.ad-form-header__input');
const PREVIEW = document.querySelector('.ad-form-header__preview');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

lable.addEventListener('click', (evt) => {
  // evt.preventDefault();
  const FILE = userChooser.files[0];
  const fileName =  FILE.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const READER = new FileReader();

    READER.addEventListener('load', () => {
      PREVIEW.src = READER.result;
    });

    READER.readAsDataURL(FILE);
  }

  console.log('win');
})
