import React, { useContext } from "react";
import TrueFalseContext from "../../Context/TrueFalseContext"
import QuizDetailContext from '../../Context/QuizDetailContext'
import CreateTrueFalseQuestions from "./CreateTrueFalseQuestions";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
 import { Link } from "react-router-dom";

const CreateTrueFalse = () => {
  const context = useContext(TrueFalseContext);
  const { trueFalseData, setTrueFalseData,} = context;
  const {quizArray,setQuizArray }=useContext(QuizDetailContext);
  const questionHandler = (e, ind) => {
    const { name, value } = e.target;
    const list = [...trueFalseData];
    list[ind][name] = value;
    setTrueFalseData(list);
  };
  const handleAddClick = () => {
    setTrueFalseData([
      ...trueFalseData,
      { question: "", type:"tf",ansVal: null, userChoose: null },
    ]);
  };
  const taskCompleteHandler=()=>{
    setQuizArray([...quizArray,trueFalseData]);
   setTimeout(() => {
    setTrueFalseData([ { question: "", ansVal: null,userChoose: null },]);
   }, 500);
  }
  return (
    <>
      <div className="d-flex align-items-center justify-content-evenly">
        <h1>True Falses</h1>
      </div>
      <div className="d-flex align-items-center justify-content-evenly mt-2 mb-2">
        <Button variant="outlined" size="large" onClick={handleAddClick}>
          <AddIcon /> Add Question
        </Button>
      </div>
      {trueFalseData.map((data, ind) => {
        return (
          <CreateTrueFalseQuestions
          key={ind}
            data={data}
            ind={ind}
            questionHandler={questionHandler}
          />
        );
      })}
      <div className="d-flex align-items-center justify-content-evenly mt-2 mb-2">
        <Link to="/" className="btn btn-success btn-lg" onClick={taskCompleteHandler}>
          Done
        </Link>
        {/* <button className="btn btn-success btn-lg" onClick={taskCompleteHandler}>Done</button>*/}
      </div> 
    </>
  )
}

export default CreateTrueFalse


