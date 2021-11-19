import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

const CreateMcqQuestions = (props) => {
  const { ques, i, questionHandler, addoptions, optionsChangeHandler,correctOptionHandler } = props;
  return (
    <>
      <div
        style={{
          backgroundColor: "#Dfffff",
          padding: "20px",
          marginTop: "15px",
        }}
        className=""
      >

        <div class="mb-3 row d-flex justify-content-center">
          {`${i + 1})`}
          <div className="col-sm-6 ">
            <input
              type="text"
              placeholder="Enter Your Question"
              className="form-control"
              id="inputPassword"
              name="question"
              value={ques.question}
              onChange={(e) => {
                questionHandler(e.target.value, i);
              }}
            />
          </div>
        </div>

        {ques.options.map((op, j) => {
          return (
            <div class="mb-3 row d-flex justify-content-center">
              <div className="form-check col-sm-6  ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="option"
                  id="flexRadioDefault2"
                  value={j}
                  onClick={(e)=>correctOptionHandler(e.target.value,i,j)}
                />
                <input
                  type="email"
                  placeholder="Enter Option"
                  className="form-control "
                  name="question"
                  value={ques.options[j].option}
                  onChange={(e) => {
                    optionsChangeHandler(e.target.value, i, j);
                  }}
                />
              </div>
            </div>
          );
        })}

        <div class="mb-3 row d-flex justify-content-center">
          <Button
            variant="outlined"
            size="small"
            className="my-auto col-sm-4"
            onClick={() => {
              addoptions(i);
            }}
          >
            <AddIcon /> Add option
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateMcqQuestions;
