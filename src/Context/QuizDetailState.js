import React ,{useState} from 'react'
import QuizDetailContext from './QuizDetailContext'
const QuizDetailState = (props) => {
    const[quizesDetail,setquizesDetail]=useState([]);
    return (
       <QuizDetailContext.Provider value={{quizesDetail,setquizesDetail}}>
           {props.children}
       </QuizDetailContext.Provider> 
    )
}

export default QuizDetailState
