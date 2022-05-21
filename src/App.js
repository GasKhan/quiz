import { useState } from 'react';

import QuizPage from './components/quizpage/QuizPage';
import StartPage from './components/startpage/StartPage';

function App() {
  const [startGame, setStartGame] = useState(false);
  function startNewGame() {
    setStartGame(true);
  }
  return (
    <div className="App">
      {startGame ? <QuizPage /> : <StartPage handler={startNewGame} />}
    </div>
  );
}

export default App;
