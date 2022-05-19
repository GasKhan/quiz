import './App.css';
import QuizPage from './components/QuizPage';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import StartPage from './components/StartPage';

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
