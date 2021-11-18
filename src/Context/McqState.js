import React,{useState} from 'react'
import McqContext from './McqContext'
const McqState = (props) => {
    const [mcqData,setMcqData]=useState([{question:"simple",correctOpt:null,options:[{option:null}]}]);
    return (
        <McqContext.Provider  value={{mcqData,setMcqData}}>
            {props.children}
        </McqContext.Provider>
    )
}

export default McqState
