import { Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const OtpPage = ({ phoneNumber, len = 4, onSubmitOtp }) => {
  const [otp, setOtp] = useState(new Array(len).fill(""));
  console.log("otp", otp);

  const inputRef= useRef([])
  const handleChange = (event, index) => {
      const value= event.target.value

      if(isNaN(value))return

    //   get the latest/last input value of paticular input box

    const newOtp = [...otp]
    newOtp[index]=value.substring(value.length-1)
     setOtp(newOtp)

    //  combined otp

    const combinedOtp = newOtp.join("")
    if(combinedOtp.length===len)onSubmitOtp(combinedOtp)
 
     // move to next input field if current input field is fill

     if(value && index < len-1 && inputRef.current[index+1]){
        inputRef.current[index+1].focus()
     }

  };

  const handleClick = (index) => {
    inputRef.current[index]?.setSelectionRange(1,1)

    // 
    if(index>0 && !otp[index-1]){
        // eslint-disable-next-line no-unused-expressions
        inputRef.current[otp.indexOf("")] 
    }
  };

  const handleKeyDown = (e, index) => {
   if( e.key==="Backspace" && !otp[index] && index >0 && inputRef.current[index-1]){
    inputRef.current[index-1].focus()

   }

  };
  useEffect(()=>{
     if(inputRef.current[0]){
        inputRef.current[0].focus()
     }
  },[])
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "20px 0",
      }}
    >
      <Typography variant="h5" component="h5" gutterBottom>
        Opt sent to this {phoneNumber}{" "}
      </Typography>
      <div>
        {otp.map((value, index) => {
          return (
            <TextField
              inputRef={(input)=>inputRef.current[index]= input}
              variant="outlined"
              key={index}
              value={value}
              onChange={(e) => handleChange(e, index)}
              onClick={() => handleClick()}
              onKeyDown={(e) => handleKeyDown(e, index)}
              sx={{ width: "40px", height: "40px", margin: "0 2px" }}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default OtpPage;
