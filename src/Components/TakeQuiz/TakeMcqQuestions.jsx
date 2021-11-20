import React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import AddIcon from "@mui/icons-material/Add";
// import Button from "@mui/material/Button";
const TakeMcqQuestions = (props) => {
  const { data, ShowResult, ind, mcqAnswerHandler } = props;
  return (
    <>
      <div
        style={{
          backgroundColor: "#Dfffff",
          padding: "20px",
          marginTop: "15px",
        }}
      >
        <div class="mb-3 row d-flex justify-content-center">
          {`${ind + 1})`}
          <div className="col-sm-6 ">
            <h6>{data.question}</h6>
          </div>
        </div>

        {data.options.map((op, j) => {
          return (
            <div class="mb-3 row d-flex justify-content-center">
              <div className="form-check col-sm-6  ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userChoice"
                  id="flexRadioDefault2"
                  // onClick={()=>mcqAnswerHandler(ind,j) }
                  onClick={(e) => mcqAnswerHandler (e, ind,j)}
                />
                <input
                  type="email"
                  placeholder="Enter Option"
                  className="form-control "
                  name="option"
                  value={data.options[j].option}
                  disabled
                />
              </div>
            </div>
           
            
          );
        })}
      </div>
    </>
  );
};

export default TakeMcqQuestions;
