import { AltRoute, Close } from "@mui/icons-material";
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
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
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
      <Box sx={{ bgcolor: "#007bff" }}>
        <img
          src="https://github.com/Adornadowilliam2/mfi-media/blob/master/whaleimg.png?raw=true"
          alt="Whale"
          style={{ width: "100%", objectFit: "contain" }}
        />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "10px",
        }}
      >
        <Typography sx={{ mb: 2, fontSize: "24px", textAlign: "center" }}>
          Register
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
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
