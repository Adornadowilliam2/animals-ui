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
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPet, getPets } from "../api/auth";
import $ from "jquery";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      const body = {
        name: $("#pet_name").val(),
        type: $("#pet_type").val(),
        image: $("#pet_image").val(),
      };

      setLoading(true);

      createPet(body)
        .then((res) => {

          if (res?.ok) {
            alert(res?.message ?? "Pet has been created.");
            navigate("/home");
          } else {
            alert(res?.message);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };


  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      <IconButton
        onClick={() => navigate("/home")}
        sx={{ position: "absolute", top: 20, right: 20 }}
      >
        <Close />
      </IconButton>

      <FormControl
        sx={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          border: "25px double black",
          p: 4,
          borderRadius: "10px",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" textAlign="center">
          Pet Manager
        </Typography>
        <TextField placeholder="Pet Name" id="pet_name" />
        <TextField placeholder="Pet Type" id="pet_type" />
        <TextField placeholder="Image URL (optional)" id="pet_image" />
        <Button type="submit" variant="contained">
          Add Pet
        </Button>
      </FormControl>
    </Box>
  );
}
