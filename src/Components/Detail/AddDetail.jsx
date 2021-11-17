import React, { useContext,useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import QuizDetailContext from "../../Context/QuizDetailContext";
import QuizDetailContext from '../../Context/QuizDetailContext'
//import TrueFalseContext from "../../Context/TrueFalseContext"
import { Link } from "react-router-dom";

const AddDetail = () => {
    const[quizDetail,setQuizDetail]=useState({title:"",description:"",creator:"" });
    const context = useContext(QuizDetailContext);
    const { quizesDetail,setquizesDetail } = context;
  
   const fillDetailHandler=(e)=>{
       const { name, value } = e.target;
   // const list = [...quizDetail];
   // list[0][name] = value;
   // setQuizDetail(list);
 setQuizDetail({...quizDetail,[name]:value})
   }
   const addDetailHandler=()=>{
       // console.log(quizDetail);
       setquizesDetail([...quizesDetail,quizDetail]);
       // setTimeout(() => {
       //   console.log(quizDetail)
       //   console.log(quizesDetail)
       // }, 8000);
   }
   return (
       <>
        <div className="d-flex align-items-center justify-content-evenly">
        <h1>Add Detail About your Quiz</h1>
        </div>
     <br/>
     <hr/>
     <br/> 
     {/* title */}
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
       
         <TextField
           id="outlined-basic"
           label="Enter Title"
           variant="outlined"
           name="title"
           value={quizDetail.title}
           onChange={fillDetailHandler}
           
         />
       </Box>
       {/* description */}
       <Box
         justifyContent="center"
         component="form"
         sx={{
           "& > :not(style)": { m: 3, width: "50%" },
         }}
         noValidate
         autoComplete="off"
         className="d-flex align-items-center"
       >
       
         <TextField
           id="outlined-basic"
           label="Enter Description"
           variant="outlined"
           name="description"
        value={quizDetail.description}
           onChange={fillDetailHandler}
         />
       </Box>
       {/* creator name */}
       <Box
         justifyContent="center"
         component="form"
         sx={{
           "& > :not(style)": { m: 3, width: "50%" },
         }}
         noValidate
         autoComplete="off"
         className="d-flex align-items-center"
       >
       
         <TextField
           id="outlined-basic"
           label="Enter Creator Name"
           variant="outlined"
           name="creator"
    value={quizDetail.creator}
          onChange={fillDetailHandler}
         />
       </Box>
       <div className="d-flex align-items-center justify-content-evenly mb-3">
       <Link to='/createQuiz' className="btn btn-success btn-lg" onClick={addDetailHandler}>Next</Link>
        </div>
      
       </>
    )
}

export default AddDetail
