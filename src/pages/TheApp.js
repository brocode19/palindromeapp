import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const TheApp = () => {
  const [name, setName] = React.useState("Never odd or even");
  const [active, setActive] = useState(false);


  const [input, setInput] = useState({
    fizz: 3,
    buzz: 5,
    start:1,
    end: 100,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value,
    });

  }

  const handleSubmit = () => {
    setActive(true);

  };
  return (
    <div className="mt-5">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Never odd or even: A Coding Project
            </Typography>
            <p>
              Never odd or even, A Palindrome is a word, phrase, or sequence
              that reads the same backwards as forwards, e.g. madam or nurses
              run.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={6}>
            <b>Enter a phrase or word to check</b>
            <Grid container spacing={3}>
              <Grid item xs={6} lg={6}>
                {" "}
                <TextField
                  margin="normal"
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="Fizz"
                  variant="outlined"
                  value={input.fizz}
                  name='fizz'
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6} lg={6}>
                {" "}
                <TextField
                  margin="normal"
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="Buzz"
                  variant="outlined"
                  value={input.buzz}
                  name='buzz'
                  onChange={handleChange} 
                />
              </Grid>
              <Grid item xs={6} lg={6}>
                {" "}
                <TextField
                  margin="normal"
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="start"
                  variant="outlined"
                  value={input.start}
                  name='start'
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6} lg={6}>
                {" "}
                <TextField
                  margin="normal"
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="end"
                  variant="outlined"
                  value={input.end}
                  name='end'
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button className="mb-3" onClick={handleSubmit} variant="contained">
              check
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TheApp;
