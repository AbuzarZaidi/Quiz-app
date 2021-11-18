import './App.css';
// import { Routes, Route } from "react-router-dom";
// import Navbar from './Components/Navbar'
// import Home from './Components/Home'
// import CreateTrueFalse from './Components/CreateTrueFalse/CreateTrueFalse'
// import TakeQuiz from './Components/TakeQuiz/TakeQuiz'
// import SelectQuiz from './Components/TakeQuiz/SelectQuiz'
// import AddDetail from './Components/Detail/AddDetail'
//  import TrueFalseState from './Context/TrueFalseState'
//  import QuizDetailState from './Context/QuizDetailState'
 import CreateMcq from './Components/CreateMcq/CreateMcq'
import McqState from './Context/McqState'
function App() {
  return (
    <>
    <h1>hello</h1>
    <McqState>
<CreateMcq/>
    </McqState>
  {/* <TrueFalseState>
  <QuizDetailState>
    <mcqState>
    <Navbar/>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AddDetail" element={<AddDetail />} />
        <Route path="SelectQuiz" element={<SelectQuiz />} />
        <Route path="createQuiz" element={<CreateTrueFalse />} />
        <Route path="takeQuiz" element={<TakeQuiz />} />
      </Routes>
      </mcqState>
</QuizDetailState>
      </TrueFalseState> */}
    </>
  );
}

export default App;