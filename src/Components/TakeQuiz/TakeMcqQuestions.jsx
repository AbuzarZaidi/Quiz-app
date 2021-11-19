import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
const TakeMcqQuestions = (props) => {
    const { data, showResult, ind, mcqAnswerHandler } = props;
    return (
        <>
        <div
          style={{
            backgroundColor: "#Dfffff",
            padding: "20px",
            marginTop: "15px",
          }}
        >
            
            <Box
          justifyContent="center"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50%" },
          }}
          noValidate
          autoComplete="off"
          className="d-flex align-items-center"
        >
          
          {`${ind + 1})`} <h6>{data.question}</h6>
        </Box>
  
          {data.options.map((op, j) => {
            return (
              <Box
                key={j}
                justifyContent="center"
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "75%" },
                }}
                noValidate
                autoComplete="off"
                className="d-flex align-items-center"
              >
                <TextField
                  id="outlined-basic"
                  label={`option ${j+1} `}
                  variant="outlined"
                   name="question"
                  value={data.options[j].option}
                  
                />
              </Box>
            );
          })}
  
        </div>
      </>
    )
}

export default TakeMcqQuestions
