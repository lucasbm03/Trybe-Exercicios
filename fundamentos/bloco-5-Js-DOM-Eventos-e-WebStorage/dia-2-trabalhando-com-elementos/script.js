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
