import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const TheApp = () => {
  const [name, setName] = React.useState("Never odd or even");
  const [reversed,setReversed] = useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  }

  
  
  const handleSubmit = () =>{

    const preprocessing_regex = /[^a-zA-Z0-9]/g
    const processed_string = name.toLowerCase().replace(preprocessing_regex , "")
    const integrity_check = processed_string.split("").reverse().join("")
    setReversed(integrity_check)
    if(processed_string === integrity_check){
      console.log('something');
    }else{
      console.log('it does work');
    }


  }
  return (
    <div className="mt-5">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Never odd or even: A Coding Project
            </Typography>
            <p>
              Never odd or even, A Palindrome is a word, phrase, or sequence
              that reads the same backwards as forwards, e.g. madam or nurses
              run.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <b>Enter a phrase or word to check</b>
            <TextField
              margin="normal"
              size="small"
              fullWidth
              id="outlined-basic"
              label="Palindrom"
              variant="outlined"
              value={name}
              onChange={handleChange}
            />
            <Button className="mb-3" onClick={handleSubmit} variant="contained">check</Button>
            <Stack sx={{ width: '100%' }} spacing={2}>


      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="success">
        <AlertTitle>Well done you have entered a Palindrome</AlertTitle>
        your string reversed is <strong>{reversed}</strong>
      </Alert>
    </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TheApp;
