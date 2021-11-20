import React ,{useState} from 'react'
import QuizDetailContext from './QuizDetailContext'
const QuizDetailState = (props) => {
    const[quizesDetail,setquizesDetail]=useState([]);
    const[quizNumber,setQuizNumber]=useState(null);
    const[quizArray,setQuizArray]=useState([])
    return (
       <QuizDetailContext.Provider value={{quizesDetail,setquizesDetail,quizNumber,setQuizNumber,quizArray,setQuizArray,}}>
           {props.children}
       </QuizDetailContext.Provider>
    )
}

export default QuizDetailState
