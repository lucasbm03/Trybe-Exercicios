let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

for(let index = 0; index < array.length; index += 1){
    if(array[index].length > maior.length){
        maior = array[index]
    }
}

for (let index1 = 0; index1 < array.length; index1 += 1){
    if(array[index1].length < menor.length){
        menor = array[index1]
    }
}
    console.log(maior);
    console.log(menor);
   