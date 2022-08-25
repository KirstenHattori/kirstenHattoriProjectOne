document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector('#hamburger');
  const menuCloseButton = document.querySelector('#closeMenu');
  const menu = document.querySelector('.slideOut');

  hamburgerButton.addEventListener('click', (e) => {
    menu.classList.add('open');
  });

  menuCloseButton.addEventListener('click', (e) => {
    menu.classList.remove('open');
  });
})