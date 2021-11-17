import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const CreateTrueFalseQuestions = (props) => {
  const { data, ind, questionHandler } = props;
    return (
        <>
      <div
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
          {`${ind + 1})`}{" "}
          <TextField
            id="outlined-basic"
            label="Enter Question"
            variant="outlined"
            name="question"
            onChange={(e) => questionHandler(e, ind)}
            value={data.question}
          />
        </Box>
        <FormControl component="fieldset" className="d-flex align-items-center">
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel
              control={<Radio size="small" />}
              label="True"
              name="ansVal"
              value="true"
              onClick={(e) => questionHandler(e, ind)}
            />
            <FormControlLabel
              name="ansVal"
              label="False"
              value="false"
              onClick={(e) => questionHandler(e, ind)}
              control={<Radio size="small" />}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </>
    )
}

export default CreateTrueFalseQuestions
