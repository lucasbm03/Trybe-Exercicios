const numberGenerator = () => {
    const anyNumber = Math.floor(Math.random() * 5) + 1;
    return anyNumber;
}

const aposta = (numero) => {
    let numeroDaAposta = numero;
    if(numeroDaAposta === numberGenerator()){
        return "Parabéns você ganhou";
    }else {
        return "Tente novamente";
    };
};

console.log(aposta(numberGenerator(5)));