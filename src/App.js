import './App.css';
import QuizPage from './components/QuizPage';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
      <QuizPage />
    </div>
  );
}

export default App;
