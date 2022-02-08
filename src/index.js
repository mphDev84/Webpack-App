import './style.css';
import myName from './myName';
import Icon from './BBKing.jpg';
import Data from './data.xml'; 
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');
  
    // Lodash now imported by the script
    element.textContent = myName("matt");
    element.classList.add("hello");

    const myImage = new Image();
    myImage.src = Icon;

    element.appendChild(myImage);

    console.log(Data);
    console.log(Notes);
  
  
    return element;
  }
  
  document.body.appendChild(component());