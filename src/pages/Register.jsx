import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const theme = useTheme();
  const isSmallScreen = theme.breakpoints.down("sm");
  const [body, setBody] = useState({
    animal_name: "",
    animal_type: "",
  });

  const handleType = (e) => {
    setBody({ ...body, animal_type: e.target.value });
  };

  const handleNameChange = (e) => {
    setBody({ ...body, animal_name: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    alert(JSON.stringify(body));
  };
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          boxShadow: "0px 0px 10px #ccc",
          margin: "10px",
        }}
        onClick={() => navigate("/home")}
      >
        <Close />
      </IconButton>
   
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          width: isSmallScreen ? "100%" : "50%",
          margin: "10px",
          
          padding: "20px",
          width:'100vw'
        }}
        variant="outlined"
      >
        <img
          src="https://i.redd.it/fzi9asuzzkp81.jpg"
          alt="red panda"
          style={{
            width: "100px",
            objectFit: "contain",
            margin: "5px auto",
            display: isSmallScreen ? "block" : "none",
          }}
        />
        <Typography sx={{ mb: 2, fontSize: "24px", textAlign: "center" }}>
          Create a new animal entry
        </Typography>
        <Box component="form" onSubmit={onSubmit}>
          <TextField
            label="Animal Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={body.animal_name}
            onChange={handleNameChange}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel htmlFor="animal-type">Animal Type</InputLabel>
            <Select
              value={body.animal_type}
              onChange={handleType}
              label="Animal Type"
            >
              {[
                "mammal",
                "bird",
                "reptile",
                "amphibian",
                "fish",
                "insect",
                "invertebrate",
              ].map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
