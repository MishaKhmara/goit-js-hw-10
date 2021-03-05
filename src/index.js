
import { template } from 'handlebars';
import menuCardsTpl from './templates/menu-cards.hbs'
import menuJson from './menu.json'
import './styles.css';




//----------------------Шаблонная Разметка-----------------------//

const menuListRef = document.querySelector(".js-menu");

function createMenuCards (menuJson){
  return  menuJson.map(menuCardsTpl).join('')
}


const cardsMarkup = createMenuCards(menuJson);
menuListRef.insertAdjacentHTML('beforeend',cardsMarkup);



//------------------------------- Тема ------------------------------//

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
 

  const refs = {
    toggleRef: document.querySelector("#theme-switch-toggle"),
    body:document.querySelector('body')
  }
  refs.body.classList.add(Theme.LIGHT)

  refs.toggleRef.addEventListener('change',onToggleChange)
  refs.toggleRef.addEventListener('change',setLocalStorage)
 



  function onToggleChange (){
   refs.body.classList.toggle(Theme.DARK)
  
  }
//------------------------------- localStorage ------------------------------//


function setLocalStorage(e) {
  const check = refs.toggleRef.checked;

  if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const themeInLocal = localStorage.getItem('theme');

if (themeInLocal === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.toggleRef.checked = true;
}