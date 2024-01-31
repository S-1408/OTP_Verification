import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import OtpPage from "./OtpPage";

const PhonePage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOtpField, setIsOtpField] = useState(false);
  const [isOtpValid,setIsOtpValid] = useState(false)
  const handleChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // phone validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    // Call Backend API
    setIsOtpField(true);
    // open  otp filed
  };

  // useEffect(()=>{
  //   setIsOtpValid(false)
  // },[isOtpValid])
  const onSubmitOTP =(otp)=>{
    console.log("login successful",otp)
    setIsOtpValid(true)

  }
  return (
    <>
    { !isOtpValid 
    ?(<Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      {!isOtpField ? (
        <>
          <Typography variant="h5" component="h5" gutterBottom>
            Log in or sign up to continue{" "}
          </Typography>
          <Typography variant="h6" component="h6" gutterBottom>
            we'll send you a text verification code
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                label="Enter Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={phoneNumber}
                onChange={handleChange}
              />

              {/* <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
        /> */}

              {/* <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl> */}

              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </>
      ) : (
        <OtpPage phoneNumber={phoneNumber} len={4} onSubmitOtp={onSubmitOTP} />
      )}

    </Container>)
 :(<Container
 maxWidth="sm"
 sx={{
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   backgroundColor: "white",
   padding: "20px",
   borderRadius: "8px",
 }}>
 <Typography> Phone number verified successfully </Typography>
</Container>)
}
</>
  );
};

export default PhonePage;
