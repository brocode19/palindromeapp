import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { Table } from "react-bootstrap";

const TheApp = () => {
  const [name, setName] = useState("Never odd or even");
  const [active, setActive] = useState(false);
  const [numbers, setNumbers] = useState([0, 1]);

  const [input, setInput] = useState({
    fizz: 3,
    buzz: 5,
    start: 1,
    end: 100,
  });


  function handleChange(event) {
    const { name, value } = event.target;

    setActive(false);

    setInput({
      ...input,
      [name]: value,
    });
  }

  function fizzBuzz() {
    setActive(true);
    let list = [];

    for (let i = input.start; i <= input.end; i++) {
      let str = i;

      str = i % input.fizz === 0 ? "fizz" : str;
      str = i % input.buzz === 0 ? "BUZZ" : str;
      str = i % input.buzz === 0 && i % input.fizz === 0 ? "fizzBUZZ" : str;

      list.push(str);
    }

    let x = [];

    const limit = Math.ceil(input.end / 4) * 4;

    for (let i = 4; i <= limit; i += 4) {
      if (i === 4) {
        x.push({
          item1: list[0],
          item2: list[1],
          item3: list[2],
          item4: list[3],
        });
      }

      if (i > 4) {
        x.push({
          item1: list[i - 4],
          item2: list[i - 3],
          item3: list[i - 2],
          item4: list[i - 1],
        });
      }
    }

    setNumbers(x);
  }

  console.log(numbers);

  return (
    <div className="mt-5">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              FIZZ BUZZ: A Coding Project
            </Typography>
            <p>
              When it counts you Fizz Buzz. A Javascript coding exercise using loops. Write a program that prints the numbers from 1 to 100 and for multiples of "3" display "Fizz buzz" instead of the number and for the multiples of "5" display "Buzz".If a multiple of both display "FizzBuzz"
            </p>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Instructions
            </Typography>
            <Typography variant="p" sx={{ mb: 2 }}>
              Enter a fizz, buzz and range value. Press the button and the values will appear.
            </Typography>
            
            
            <div className="container">
              <div className="row">{numbers.for}</div>
            </div>
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
                  name="fizz"
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
                  name="buzz"
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
                  name="start"
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
                  name="end"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button className="mb-3" onClick={fizzBuzz} variant="contained">
              BUZZ IT
            </Button>

            {active && (
              <Table striped size="sm">
                <tbody>
                  {numbers.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.item1}</td>
                        <td>{item.item2}</td>
                        <td>{item.item3}</td>
                        <td>{item.item4}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TheApp;
