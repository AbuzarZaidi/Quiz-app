import "./App.css";
import { Routes, Route } from "react-router-dom";
import McqState from "./Context/McqState";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import CreateTrueFalse from "./Components/CreateTrueFalse/CreateTrueFalse";
import TakeQuiz from "./Components/TakeQuiz/TakeQuiz";
import SelectQuiz from "./Components/TakeQuiz/SelectQuiz";
import AddDetail from "./Components/Detail/AddDetail";
import TrueFalseState from "./Context/TrueFalseState";
import QuizDetailState from "./Context/QuizDetailState";
 import CreateMcq from './Components/CreateMcq/CreateMcq'
 import * as React from 'react';
 import Box from '@mui/material/Box';
 import Input from '@mui/material/Input';
 import InputLabel from '@mui/material/InputLabel';
 import InputAdornment from '@mui/material/InputAdornment';
 import FormControl from '@mui/material/FormControl';
 import TextField from '@mui/material/TextField';
 import AccountCircle from '@mui/icons-material/AccountCircle';
 
function App() {
  return (
    <>
     
        <TrueFalseState>
          <QuizDetailState>
          <McqState>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="AddDetail" element={<AddDetail />} />
              <Route path="SelectQuiz" element={<SelectQuiz />} />
              <Route path="createTrueFalse" element={<CreateTrueFalse />} />
              <Route path="takeQuiz" element={<TakeQuiz />} />
              <Route path="createMcq" element={<CreateMcq/>} />
            </Routes>
            </McqState>
          </QuizDetailState>
        </TrueFalseState>
    
       
    </>
  );
}

export default App;
