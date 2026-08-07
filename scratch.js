const quizData = [
  {
    id: 'q1',
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    correctAnswer: 2
  }
];

const shuffleQuestions = (data) => {
  return [...data]
    .map(q => {
      const optionsWithIndex = q.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
      const shuffledOptions = [...optionsWithIndex].sort(() => Math.random() - 0.5);
      const zeroBasedCorrectAnswer = Number(q.correctAnswer) - 1;
      const newCorrectAnswerIndex = shuffledOptions.findIndex(o => o.originalIndex === zeroBasedCorrectAnswer);
      
      return {
        ...q,
        options: shuffledOptions.map(o => o.text),
        correctAnswer: newCorrectAnswerIndex
      };
    })
    .sort(() => Math.random() - 0.5);
};

const result1 = shuffleQuestions(quizData);
const result2 = shuffleQuestions(quizData);
console.log("Original correctAnswer:", quizData[0].correctAnswer);
console.log("Result 1 correctAnswer:", result1[0].correctAnswer);
console.log("Result 2 correctAnswer:", result2[0].correctAnswer);
