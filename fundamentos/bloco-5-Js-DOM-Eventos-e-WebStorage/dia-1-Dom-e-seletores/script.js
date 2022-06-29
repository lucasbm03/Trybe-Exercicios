function changeText(){
   let paragraph = document.getElementsByTagName('p')[1];
   paragraph.innerText = 'ganhar 3k'
}
changeText();

function changeColorGreen(){
    let green = document.getElementsByClassName('main-content')[0];
    green.style.backgroundColor = 'rgb(76, 164, 109)'
}
changeColorGreen();

function changeColorWhite(){
    let white = document.getElementsByClassName('center-content')[0];
    white.style.backgroundColor = 'white'
}
changeColorWhite();

function changeTagH1(){
    let tagH1 = document.getElementsByClassName('title')[0];
    tagH1.innerText = ('Exercício 5.1 - JavaScript')
}
changeTagH1();

function upCase(){
    let caps = document.getElementsByTagName('p')[0];
    caps.innerHTML = caps.innerHTML.toUpperCase();
}
upCase();

function showParagraphs(){
    let show = document.getElementsByTagName('p');
    for(let i = 0; i < show.length; i += 1){
        console.log(show[i].innerText)
    }
}
showParagraphs();
