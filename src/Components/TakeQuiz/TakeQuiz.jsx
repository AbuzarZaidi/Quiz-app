import React, { useContext, useState } from "react";
import QuizDetailContext from "../../Context/QuizDetailContext";
import TakeTrueFalseQuestion from "./TakeTrueFalseQuestion";
import { Link } from "react-router-dom";
import TakeMcqQuestions from "./TakeMcqQuestions";

const TakeQuiz = () => {
  const [result, setResult] = useState(0);
  const [count, setCount] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizType, setQuizType] = useState("t");
  const context = useContext(QuizDetailContext);
  const { quizArray, setQuizArray, quizNumber } = context;
  const quizData = quizArray[quizNumber];
  //  setQuizType(quizArray[quizNumber][count].type);
  //  console.log(quizType);
  // const quizType=quizArray[quizNumber][0].type;
  // console.log(quizType)

  // if(quizArray[quizNumber][0].type==="tf"){
  //   setQuizType(true);
  // }

  const trueFalseAnswerHandler = (e, ind) => {
    const { name, value } = e.target;
    const list = [...quizArray];
    list[quizNumber][ind][name] = value;
    setQuizArray(list);
  };
  const trueFalseResultHandler = () => {
    let count = 0;
    quizData.map((data) => {
      if (data.userChoose === data.ansVal) {
        count++;
      }
      return 0;
    });
    setResult(count);
    setTimeout(() => {
      setShowResult(true);
      ResetTrueFalseChoices();
    }, 300);
  };
  const ResetTrueFalseChoices = () => {
    let quizVal = quizArray[quizNumber];
    quizVal.map((ele) => {
      return (ele.userChoose = null);
    });
    quizArray[quizNumber] = quizVal;
    setQuizArray(quizArray);
  };
  const mcqAnswerHandler = (e, ind, j) => {
    const { name } = e.target;
    const list = [...quizArray];
    list[quizNumber][ind][name] = j;
    setQuizArray(list);
    setTimeout(() => {
      //  console.log(quizArray)
    }, 1000);
  };
  const mcqResultHandler = () => {
    let count = 0;
    quizData.map((data) => {
     
      if (data.userChoice === data.correctOpt) {
        count++;
       
      }
      return 0;
    });

    setTimeout(() => {
      setResult(count);
      setShowResult(true);
      ResetMcqChoices();
    }, 300);
  };

  const ResetMcqChoices = () => {
    let quizVal = quizArray[quizNumber];
    quizVal.map((ele) => {
      return (ele.userChoise = null);
    });
    quizArray[quizNumber] = quizVal;
    setQuizArray(quizArray);
  };
  return (
    <>
      <div className="text-center">
        {quizType=== "tf" ? <h2>True False Section</h2> : <h2>MCQ Section</h2>}
        {showResult === true ? <h2>Result</h2>:""}
        <br />
        {showResult && (
          <h4>
            You got {result} out of {quizData.length}
          </h4>
        )}
      </div>
      {quizType === "tf"
        ? quizArray[quizNumber].map((data, ind) => {
            return (
              <TakeTrueFalseQuestion
                key={ind}
                data={data}
                showResult={showResult}
                ind={ind}
                trueFalseAnswerHandler={trueFalseAnswerHandler}
              />
            );
          })
        : quizArray[quizNumber].map((data, ind) => {
            return (
              <TakeMcqQuestions
                key={ind}
                data={data}
                showResult={showResult}
                ind={ind}
                mcqAnswerHandler={mcqAnswerHandler}
              />
            );
          })}

      {showResult === false ? (
        <div className="d-flex align-items-center justify-content-evenly mt-2 mb-2">
          <button
            className="btn btn-success btn-lg"
            onClick={
              quizType === "tf" ? trueFalseResultHandler : mcqResultHandler
            }
          >
            Show Result
          </button>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-evenly mt-2 mb-2">
          <Link to="/" className="btn btn-success btn-lg ">
            Back
          </Link>
        </div>
      )}
    </>
  );
};

export default TakeQuiz;
