import { Box, Button, Card, Container, Typography } from "@mui/material";
import React from "react";
import { data } from "../../index";

import { useNavigate } from "react-router-dom";

export default function Landingpage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => navigate("/")}
      >
        Add new animal
      </Button>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "10px",
        }}
      >
        {data.map((item) => (
          <Card
            key={item.id}
            sx={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
              backgroundColor: "white",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#f0f0f0",
                transform: "scale(1.09)",
                transition: "all 0.3s ease-in-out",
              },
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <Typography>{item.name}</Typography>
            <Typography sx={{ fontSize: "12px", color: "#ccc" }}>
              {item.animal_type}
            </Typography>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
