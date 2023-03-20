import { useState, useEffect } from 'react';

import Title from './components/Title.jsx';

const App = () => {
  const [quiz, setQuiz] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/quiz');
      const data = await response.json();
      setQuiz(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Title />
    </div>
  );
};

export default App;
