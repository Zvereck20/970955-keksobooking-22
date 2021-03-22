const TIMEOUT_TIME = 5000;

// Окно ошибки загрузки данных

const loadingError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '15px 5px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'white';
  alertContainer.style.backgroundColor = '#ee3643';
  alertContainer.style.border = '5px solid black';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, TIMEOUT_TIME);
};

export {
  loadingError
};
