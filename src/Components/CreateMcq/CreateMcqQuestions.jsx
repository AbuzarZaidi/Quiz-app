import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
const CreateMcqQuestions = (props) => {
    const {ques,i,questionHandler}=props;
    return (
        <>
         <div
            
            style={{
              backgroundColor: "#D3D3D3",
              padding: "20px",
              marginTop: "15px",
            }}
          >
                <Box
              justifyContent="center"
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "75%" },
              }}
              noValidate
              autoComplete="off"
              className="d-flex align-items-center"
            >
              {/* {`${ind + 1})`}{" "} */}
              {`${i + 1})`}
              <TextField
                id="outlined-basic"
                label="Enter Question"
                variant="outlined"
                name="question"
                onChange={(e) => {
                  questionHandler(e.target.value, i);
                }}
                 value={ques.question}
              />
           
            </Box>

            
           {ques.options.map((op, j) => {
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
                    label="Enter Option"
                    variant="outlined"
                    //  name="question"
                    // value={ques.optionValue[j].optionText}
                    // onChange={(e) => {
                    //   optionsChangeHandler(e.target.value, i, j);
                    //  }}
                  />
                </Box>)})}
                {/* <Button variant="outlined" size="small" className="my-2"onClick={()=>{addoptions(i)}}>
          <AddIcon /> Add option
        </Button> */}
               </div>
        </>
    )
}

export default CreateMcqQuestions
