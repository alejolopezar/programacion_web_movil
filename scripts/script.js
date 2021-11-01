const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu_navegacion');

hamburguesa.addEventListener('click', () => {
  if(menu.style.display == 'none')
    menu.style.display = 'flex';
  else
    menu.style.display = 'none';
});