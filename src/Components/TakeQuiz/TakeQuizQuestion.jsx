import React from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Divider from '@mui/material/Divider';
const TakeQuizQuestion = (props) => {
  const { data, showResult, ind, userAnswerHandler } = props;
  return (
    <>
     { !showResult&& <div
        key={ind}
        style={{
          backgroundColor: "white",
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
        <FormControl component="fieldset" className="d-flex align-items-center">
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel
              control={<Radio size="small" />}
              label="True"
              name="userChoose"
              value="true"
              onClick={(e) => userAnswerHandler(e, ind)}
            />
            <FormControlLabel
              name="userChoose"
              label="False"
              value="false"
              onClick={(e) => userAnswerHandler(e, ind)}
              control={<Radio size="small" />}
            />
          </RadioGroup>
        </FormControl>
        {/* <hr /> */}
        <Divider variant="middle" />
      </div>}
    </>
  );
};

export default TakeQuizQuestion;