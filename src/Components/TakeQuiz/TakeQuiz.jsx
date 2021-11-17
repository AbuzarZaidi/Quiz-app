import React, { useContext, useState } from "react";
import TrueFalseContext from "../../Context/TrueFalseContext";
import TakeQuizQuestions from "./TakeQuizQuestion";
import { Link } from "react-router-dom";

const TakeQuiz = () => {
    const [result, setResult] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const context = useContext(TrueFalseContext);
    const { trueFalseDataArray,setTrueFalseDataArray, quizNumber } = context;
    
  const trueFalseData = trueFalseDataArray[quizNumber];

  const userAnswerHandler = (e, ind) => {
    const { name, value } = e.target;
    const list = [...trueFalseDataArray];
    list[quizNumber][ind][name] = value;
    setTrueFalseDataArray(list);
  };
  const calResultHandler = () => {
    let count = 0;
    trueFalseData.map((data) => {
      
      if (data.userChoose === data.ansVal) {
        count++
      }
      return 0;
    });
    setResult(count);
    setTimeout(() => {
      setShowResult(true);
      ResetUserChoose();
    }, 300);
  };
  const ResetUserChoose = () => {
    let trueFalseVal = trueFalseDataArray[quizNumber];
    trueFalseVal.map((ele) => {
     return( ele.userChoose = null)
    });
    trueFalseDataArray[quizNumber] = trueFalseVal;
    setTrueFalseDataArray(trueFalseDataArray);
  };
    return (
        <>
        <div className="text-center">
         {showResult===false? <h2>True False Section</h2>:<h2>Result</h2>}
          <br />
          {showResult && (
            <h4>
              You got {result} out of {trueFalseData.length}
            </h4>
          )}
        </div>
        {trueFalseData.map((data, ind) => {
          return (
            <TakeQuizQuestions
            key={ind}
              data={data}
              showResult={showResult}
              ind={ind}
              userAnswerHandler={userAnswerHandler}
            />
          );
        })}
        { showResult===false?<div className="d-flex align-items-center justify-content-evenly mt-2 mb-2">
          <button className="btn btn-success btn-lg" onClick={calResultHandler}>
            Show Result
          </button>
        </div>:<div className="d-flex align-items-center justify-content-evenly mt-2 mb-2"><Link to='/' className="btn btn-success btn-lg ">Back</Link></div>}
      </>
    )
}

export default TakeQuiz
