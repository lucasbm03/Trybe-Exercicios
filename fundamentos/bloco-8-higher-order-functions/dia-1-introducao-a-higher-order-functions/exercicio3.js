const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const result = (rightAnswer, studentAnswer) => {
    if (rightAnswer === studentAnswer) {
      return 1;
    } if (studentAnswer === 'N.A') {
      return 0;
    }
    return -0.5;
  };

    const contador = (rightAnswer, studentAnswer, action) => {
        let nota = 0;
        for(i = 0; i < RIGHT_ANSWERS.length; i += 1){
            const actionReturn = action(rightAnswer[i], studentAnswer[i]);
            nota += actionReturn;
        }
        return `resultado final : ${nota} pontos`;
    };

console.log(contador(RIGHT_ANSWERS, STUDENT_ANSWERS, result));

