import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  List,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createPet, getPets } from "../api/auth";
import { Close, Image } from "@mui/icons-material";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

export default function Landingpage() {
  const [pets, setPets] = useState([]);

  const navigate = useNavigate();


  const fetchPets = () => {
    getPets().then((res) => {

      if (res?.ok) {
        setPets(res.data); 
      }
    });
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <Container>
      <IconButton
        onClick={() => navigate("/")}
        sx={{ position: "absolute", top: 20, right: 20 }}
      >
        <Close />
      </IconButton>
      <Box>
        <Typography variant="h5" textAlign="center" mt={4}>
          Pet List
        </Typography>
        {pets.length == 0 ? (
          <Typography textAlign="center" mt={2}>
            No pets found. Please add some!
          </Typography>
        ) : (
          <List>
            {pets.map((pet) => (
              <Box
                key={pet.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                  border: "1px solid #ccc",
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                {pet.image && (
                  <img
                    src={pet.image}
                    alt={pet.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                )}
                <Box>
                  <Typography variant="h6">{pet.name.toUpperCase()}</Typography>
                  <Typography variant="body2">{pet.type}</Typography>
                </Box>
              </Box>
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
}
