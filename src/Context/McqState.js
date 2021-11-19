import React,{useState} from 'react'
import McqContext from './McqContext'
const McqState = (props) => {
    const [mcqData,setMcqData]=useState([{question:null,type:"mcq",userChoice:null,correctOpt:null,options:[{option:null}]}]);
    // const [mcqArray,setMcqArray]=useState([]);
    return (
        <McqContext.Provider  value={{mcqData,setMcqData,}}>
            {props.children}
        </McqContext.Provider>
    )
}

export default McqState
