const addH1 = document.createElement('h1');
addH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(addH1);

const tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain);

const addSection = document.createElement('section');
addSection.className = 'center-content';
tagMain.appendChild(addSection);

const addP = document.createElement('p');
addP.innerText = 'Filho do section';
addSection.appendChild(addP);

const addSection2 = document.createElement('section');
addSection2.className = 'left-content';
tagMain.appendChild(addSection2);

const addSection3 = document.createElement('section');
addSection3.className = 'right-content';
tagMain.appendChild(addSection3);

const addImage = document.createElement('img');
addImage.className = 'small-image';
addImage.src = 'https://picsum.photos/200';
addSection2.appendChild(addImage);