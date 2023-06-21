const form = document.querySelector('form');
const input = document.querySelector('.page__input');
const err = document.querySelector('.error');
const btn = document.querySelector('.page__btn');
//

btn?.addEventListener('click', e => {
  e.preventDefault();

  // function removeActive() {
  //   input?.classList.remove('correct');
  // }

  // if (input?.value === '') {
  //   const html = `
  //   Whoops! It looks like you forgot to add your email
  //   `;

  //   err.innerHTML = html;

  //   input?.classList.add('wrong');
  // } else {
  //   removeActive();
  //   input?.classList.add('correct');
  // }

  // const validRegex = /^[a-z0-9@]/;

  // if (input?.value.match(validRegex)) {
  //   input?.classList.add('correct');
  // } else {
  //   const html = `
  //   Please provide a valid email address
  //   `;

  //   err.innerHTML = html;

  //   input?.classList.add('wrong');
  // }
});

function validateEmail() {
  if (input.value === '') {
    err.innerHTML = 'Whoops! It looks like you forgot to add your email';

    input.style.borderColor = 'crimson';

    return false;
  } else if (
    !input?.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    const html = `
     Please provide a valid email address
    `;

    err.innerHTML = html;

    input.style.borderColor = 'crimson';
    return true;
  } else {
    err.innerHTML = '';

    input.style.borderColor = 'lime';
    return true;
  }
}
