import React,{useState} from 'react'
import TrueFalseContext from './TrueFalseContext'
const TrueFalseState = (props) => {
    
     const [trueFalseData, setTrueFalseData] = useState([ {question: "", ansVal: null,userChoose: null },]);
     const[trueFalseDataArray,setTrueFalseDataArray]=useState([]);
     const[quizNumber,setQuizNumber]=useState(null);
    return (
        <TrueFalseContext.Provider value={{trueFalseData,setTrueFalseData,trueFalseDataArray,setTrueFalseDataArray,quizNumber,setQuizNumber}}>
            {props.children}
        </TrueFalseContext.Provider>
    )
}

export default TrueFalseState