import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import CreateTrueFalse from './Components/CreateTrueFalse/CreateTrueFalse'
import TakeQuiz from './Components/TakeQuiz/TakeQuiz'
import SelectQuiz from './Components/TakeQuiz/SelectQuiz'
 import TrueFalseState from './Context/TrueFalseState'
 import QuizDetailState from './Context/QuizDetailState'
import AddDetail from './Components/Detail/AddDetail'
function App() {
  return (
    <>
  <TrueFalseState>
  <QuizDetailState>
    <Navbar/>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AddDetail" element={<AddDetail />} />
        <Route path="SelectQuiz" element={<SelectQuiz />} />
        <Route path="createQuiz" element={<CreateTrueFalse />} />
        <Route path="takeQuiz" element={<TakeQuiz />} />
      </Routes>
</QuizDetailState>
      </TrueFalseState>
    </>
  );
}

export default App;