import { useState, useEffect } from 'react';

import Title from './components/Title.jsx';
import QuestionsBlock from './components/QuestionsBlock.jsx';

const App = () => {
  const [quiz, setQuiz] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/quiz');
      const data = await response.json();
      console.log(data);
      setQuiz(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(quiz);

  return (
    <div className='app'>
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz &&
        quiz?.content.map((contentItem) => {
          return <QuestionsBlock key={contentItem.id} quizItem={contentItem}/>
        })}
    </div>
  );
};

export default App;
