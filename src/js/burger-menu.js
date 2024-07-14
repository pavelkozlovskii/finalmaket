const burgerButton = document.querySelector('.button--burger');
const burgerCloseButton = document.querySelector('.menu__button--close');
const asideMenu = document.querySelector('.menu');
const blurredWrapper = document.querySelector('.blurred-wrapper');
const breakPointLarge = window.matchMedia('(min-width: 1440px)');

const feedbackForm = document.querySelector('.modal--feedback');
const callFormsNodeList = document.querySelectorAll('.contact-group');

const callBackForm = document.querySelector('.modal--callBack');

for (let element of callFormsNodeList) {
  element.querySelector('.button--chat').addEventListener('click', () => {
    feedbackForm.classList.add('modal--active');
    blurredWrapper.hidden = false;
  });
  element.querySelector('.button--call').addEventListener('click', () => {
    callBackForm.classList.add('modal--active');
    blurredWrapper.hidden = false;
  });
}

feedbackForm.querySelector('.button--close').addEventListener('click', () => {
  feedbackForm.classList.remove('modal--active');
  blurredWrapper.hidden = true;
});

callBackForm.querySelector('.button--close').addEventListener('click', () => {
  callBackForm.classList.remove('modal--active');
  blurredWrapper.hidden = true;
});

burgerButton.addEventListener('click', () => {
  asideMenu.classList.add('menu--active');
  blurredWrapper.hidden = false;
});

burgerCloseButton.addEventListener('click', () => {
  asideMenu.classList.remove('menu--active');
  blurredWrapper.hidden = true;
});

blurredWrapper.addEventListener('click', () => {
  if (asideMenu.classList.contains('menu--active')) {
    burgerCloseButton.click();
  }
  if (feedbackForm.classList.contains('modal--active')) {
    feedbackForm.querySelector('.button--close').click();
  }
  if (callBackForm.classList.contains('modal--active')) {
    callBackForm.querySelector('.button--close').click();
  }
});

breakPointLarge.addEventListener('change', () => {
  if (breakPointLarge.matches) {
    if (!feedbackForm.classList.contains('modal--active')) {
      blurredWrapper.hidden = true;
    }
    asideMenu.classList.remove('menu--active');
  }
});
