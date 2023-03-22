import { useEffect, useState } from 'react';

const AnswerBlock = ({ answerOptions, chosenAnswers }) => {
  const [result, setResult] = useState(answerOptions[0]);

  useEffect(() => {
    answerOptions.forEach((answer) => {
      if (
        chosenAnswers.includes(answer.combination[0]) &&
        chosenAnswers.includes(answer.combination[1]) &&
        chosenAnswers.includes(answer.combination[2])
      ) {
        setResult(answer);
      }
    });
  }, [result]);

  console.log(result);
  console.log(result.description);

  return (
    <div className='answer-container' id='answer-container'>
      <h2 className='answer-title'>{result.text}</h2>
      <div className='answer-block'>
        <img src={result?.image} alt={result?.alt} />
      </div>
    </div>
  );
};

export default AnswerBlock;
