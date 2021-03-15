const FORM = document.querySelector('.ad-form');
const MAP = document.querySelector('.map__filters')

const FORM_CLASS = FORM.className;
const MAP_CLASS = MAP.className;

const addClass = (object, className, tag) => {
  object.classList.add(`${className}--disabled`);

  const FIELDSET = object.querySelectorAll(tag);

  FIELDSET.forEach(element => {
    element.setAttribute('disabled', '');
  });

  return object;
};

const removeClass = (object, className, tag) => {
  object.classList.remove(`${className}--disabled`);
  // object.classList.toggle(`${CLASS_NAME}--disabled`, false)

  const FIELDSET = object.querySelectorAll(tag);

  FIELDSET.forEach(element => {
    element.removeAttribute('disabled', '');
  });

  return object;
}

addClass(FORM, FORM_CLASS, 'fieldset');
addClass(MAP, MAP_CLASS, 'select');


const setMapActive = () => {
  removeClass(FORM, FORM_CLASS, 'fieldset');
  removeClass(MAP, MAP_CLASS, 'select');
};

export {
  setMapActive
}
