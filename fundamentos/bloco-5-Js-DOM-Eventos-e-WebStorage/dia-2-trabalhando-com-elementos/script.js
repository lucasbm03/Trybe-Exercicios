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

const addUl = document.createElement('ul');
addSection3.appendChild(addUl);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis','Sete', 'Oito', 'Nove', 'Dez'];
for(index = 0; index < arrayNumbers.length; index += 1){
    const addLi = document.createElement('li');
    addLi.innerHTML = arrayNumbers[index];
    addUl.appendChild(addLi);
}

for(let i = 1; i <= 3; i += 1){
const h33 = document.createElement('h3');
h33.innerText = 'Show ' + i;
addSection3.appendChild(h33);
}

addH1.className = 'title';

const elementsH3 = document.getElementsByTagName('h3');
for(let i1 = 0; i1 < 3; i1 += 1){
    elementsH3[i1].className = 'description';
}

const removeAddSection2 = document.getElementsByClassName('left-content')[0]
tagMain.removeChild(removeAddSection2);

const centralizeAddSection3 = document.getElementsByClassName('right-content')[0];
centralizeAddSection3.style.marginRight = 'auto';