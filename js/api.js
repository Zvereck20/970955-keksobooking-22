fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((Response) => Response.json())
  .then((json) => {
    console.log('return', json)
  });

fetch('https://22.javascript.pages.academy/keksobooking', {
    method: 'POST',
    credentials: 'same-origin',
    body: new FormData(),
  }, )
  .then((Response) => Response.json())
  .then((json) => {
    console.log('POST', json);
  });
