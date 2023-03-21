import { useState, useEffect } from 'react';

import Title from './components/Title.jsx';
import QuestionsBlock from './components/QuestionsBlock.jsx';

const App = () => {
  const [quiz, setQuiz] = useState(false);
  const [chosenAnswerItems, setChosenAnswerItems] = useState([]);
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/quiz');
      const data = await response.json();
      // console.log(data);
      setQuiz(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const unansweredIds = quiz?.content?.map(({ id }) => id);
    setUnansweredQuestionIds(unansweredIds);
  }, [quiz]);

  console.log(chosenAnswerItems);
  console.log(unansweredQuestionIds)

  return (
    <div className='app'>
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz &&
        quiz?.content.map((contentItem) => (
          <QuestionsBlock
            key={contentItem.id}
            quizItem={contentItem}
            chosenAnswerItems={chosenAnswerItems}
            setChosenAnswerItems={setChosenAnswerItems}
            unansweredQuestionIds={unansweredQuestionIds}
            setUnansweredQuestionIds={setUnansweredQuestionIds}
          />
        ))}
    </div>
  );
};

export default App;
