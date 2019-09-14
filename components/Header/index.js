// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const header = document.querySelector('.header-container');

function createHeader(){
    const newHeader = document.createElement('div');
    newHeader.classList.add('header');


    const date = document.createElement('span');
    date.classList.add('date');
    newHeader.appendChild(date);


    const title = document.createElement('h1');
    newHeader.appendChild(title);


    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent= '98°';
    newHeader.appendChild(temp);
    
    return newHeader;
}

header.appendChild(createHeader());
// console.log(createHeader());