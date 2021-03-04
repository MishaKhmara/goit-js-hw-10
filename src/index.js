
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
  
  function onToggleChange (){
    refs.body.classList.toggle(Theme.DARK)
      
  }
//------------------------------- localStorage ------------------------------//
console.log(localStorage)
localStorage.setItem('Theme', JSON.stringify(Theme));




const savedSettings = localStorage.getItem('Theme');
const parsedSettings = JSON.parse(settingsFromLS);

console.log(parsedSettings);



