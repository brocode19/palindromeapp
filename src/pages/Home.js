import React from "react";
import { Card, Container, Grid, Typography } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../images/palindrome1.png";
import pic2 from "../images/palindrome2.png";
import pic3 from "../images/palindrome3.png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/TheApp");
  };

  return (
    <div>
      <Container className="mt-5" maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Typography variant="h5" sx={{ pb: 3, color: "black" }}>
              {"Palindrome Checker"}
            </Typography>
            <Typography variant="body2" sx={{ pb: 3, color: "#497174" }}>
              {
                "Palindrome checker is a coding exercise done with react js using hooks, functions and object deconstruction.Write a function that takes a word then returns true if it is a palindrome and false otherwise."
              }
              <br />
              <br />
              {'A Palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run.'}
            </Typography>

            <Typography variant="h6" sx={{ pb: 2, color: "black" }}>
              Technologies:
            </Typography>
            <Typography variant="body2" sx={{ pb: 3, color: "#497174" }}>
              React Js, FireBase, Material Ui, Bootstrap 5, Js, HTML5 and Css
            </Typography>

              <Button onClick={handleNavigate} variant="primary" size="sm">
                Try it out now
              </Button>
              <Button className="ms-2" onClick={handleNavigate} variant="primary" size="sm">
                The Code
              </Button>

          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100 h-60"
                  src={pic1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={pic2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={pic3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
