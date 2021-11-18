import React, { useContext } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import McqContext from "../../Context/McqContext";
import CreateMcqQuestions from "./CreateMcqQuestions";

const CreateMcq = () => {
  const context = useContext(McqContext);
  const { mcqData, setMcqData } = context;
  const addQuestion = () => {
    setMcqData([
      ...mcqData,
      {
        question: null,
        correctOpt: null,
        options: [{ option: null }],
      },
    ]);
    console.log(mcqData);
  };
  const questionHandler = (text, i) => {
    let newQuestion = [...mcqData];
    newQuestion[i].question = text;
    setMcqData(newQuestion);
    // console.log(mcqData);
  };
  function addoptions(i){
    let optionQuestion=[...mcqData];
    // optionQuestion[i].options.push({option:"option"+(optionQuestion[i].optionValue.length+1)})
    optionQuestion[i].options.push({option:null})
    setMcqData(optionQuestion);
      }
      const optionsChangeHandler = (text, i, j) => {
        let optionQuestion = [...mcqData];
        optionQuestion[i].options[j].option = text;
        setMcqData(optionQuestion);
      };
  return (
    <>
      <div className="d-flex align-items-center justify-content-evenly">
        <h1 className="mt-3">MCQ</h1>
      </div>
      <div className="d-flex align-items-center justify-content-evenly mt-2 mb-2">
        <Button variant="outlined" size="large" onClick={addQuestion}>
          <AddIcon /> Add Question
        </Button>
      </div>
      {mcqData.map((ques, i) => {
        return (
          <>
            <CreateMcqQuestions
              key={i}
              ques={ques}
              i={i}
              questionHandler={questionHandler}
              addoptions={addoptions}
              optionsChangeHandler={optionsChangeHandler}
            />
          </>
        );
      })}
    </>
  );
};

export default CreateMcq;
