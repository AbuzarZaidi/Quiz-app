import React, { useContext } from "react";
import TrueFalseContext from "../../Context/TrueFalseContext";
import QuizDetailContext from "../../Context/QuizDetailContext";
import { Link } from "react-router-dom";
const SelectQuiz = () => {
    const context = useContext(TrueFalseContext);
    const {  setQuizNumber } = context;
    const {quizesDetail}=useContext(QuizDetailContext);
    // console.log(quizesDetail);
    const setInd = (ind) => {
      setQuizNumber(ind);
    };
    return (
        <>
        <div className="d-flex align-items-center justify-content-evenly">
          <h1>Select Quiz</h1>
        </div>
        <div className=" row  d-flex justify-content-evenly">
          {quizesDetail.map((quiz, ind) => {
            return (
              <div className="card" style={{ width: "18rem" }} key={ind}>
                <div className="card-body">
                  <h4 className="card-title">{quiz.title}</h4>
                  <h6 className="card-text"> Created By {quiz.creator}</h6>
                  <p className="card-text">{quiz.description}</p>
  
                  <Link
                    to="/takeQuiz"
                    onClick={() => setInd(ind)}
                    className="btn btn-primary"
                  >
                    Start Quiz
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </>
    )
}

export default SelectQuiz
