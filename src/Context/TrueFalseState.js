import React,{useState} from 'react'
import TrueFalseContext from './TrueFalseContext'
const TrueFalseState = (props) => {
    
     const [trueFalseData, setTrueFalseData] = useState([ {question: null,type:"tf", ansVal: null,userChoose: null },]);
    //  const[trueFalseDataArray,setTrueFalseDataArray]=useState([]);
    //  const[quizNumber,setQuizNumber]=useState(null);
    return (
        <TrueFalseContext.Provider value={{trueFalseData,setTrueFalseData,}}>
            {props.children}
        </TrueFalseContext.Provider>
    )
}

export default TrueFalseState