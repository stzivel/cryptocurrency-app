import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";

function CryptoDetails() {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/coins/${id}`)
      .then((response) => {
        setCoin(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  console.log(coin);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      sx={{ minHeight: "92vh" }}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "col",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <Box
            sx={{
              width: { xs: "70%", md: "80%" },
              
              borderRadius: 0,
              
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "left",
                color: "#0cbaba",
                bgcolor: "#000",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)",
                padding: "2rem",
                marginTop:'2rem',
                marginBottom:'2rem',
                border:'1px solid #0cbaba',
              }}
            >
              <Box
                mb={2}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <img
                  src={coin.image}
                  alt={coin.name}
                  width="80px"
                  height="80px"
                />
              </Box>

              <Typography variant="h4" sx={{fontWeight:'bold'}}>{coin.name}</Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "gray",
                  fontWeight: "bold",
                  marginBottom:'0.5rem'
                }}
              >
                <span style={{color:'#8753e9'}}>Price: &nbsp;</span>
                {coin.current_price.toLocaleString()}€
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "gray",
                  fontWeight: "bold",
                  marginBottom:'0.5rem'
                }}
              >
                
                <span style={{color:'#8753e9'}}>Description: &nbsp;</span>
                {coin.description.replace(/(<([^>]+)>)/gi, "")}
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "gray",
                  fontWeight: "bold",
                  marginBottom:'0.5rem'
                }}
              >
                
                <span style={{color:'#8753e9'}}>Price change last 24h: &nbsp;</span>
                {coin.price_change_24h.toLocaleString()}%
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "gray",
                  fontWeight: "bold",
                  marginBottom:'0.5rem'
                }}
              >
                
                <span style={{color:'#8753e9'}}>Price change last 7d: &nbsp;</span>
                {coin.price_change_7d.toLocaleString()}%
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "gray",
                  fontWeight: "bold",
                  marginBottom:'0.5rem'
                }}
              >
                
                <span style={{color:'#8753e9'}}>Price change last 14d: &nbsp;</span>
                {coin.price_change_14d.toLocaleString()}%
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "gray",
                  fontWeight: "bold",
                  marginBottom:'0.5rem'
                }}
              >
                
                <span style={{color:'#8753e9'}}>Price change last 1 month: &nbsp;</span>
                {coin.price_change_30d.toLocaleString()}%
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "gray",
                  fontWeight: "bold",
                  marginBottom:'0.5rem'
                }}
              >
               
                <span style={{color:'#8753e9'}}> Price change last 2 months: &nbsp;</span>
                {coin.price_change_60d.toLocaleString()}%
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "gray",
                  fontWeight: "bold",
                  marginBottom:'0.5rem'
                }}
              >
                
                <span style={{color:'#8753e9'}}> Price change last 200d: &nbsp;</span>
                {coin.price_change_200d.toLocaleString()}%
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "gray",
                  fontWeight: "bold",
                  marginBottom:'0.5rem'
                }}
              >
                
                <span style={{color:'#8753e9'}}>Price change last 1y: &nbsp;</span>
                {coin.price_change_1y.toLocaleString()}%
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Stack>
  );
}

export default CryptoDetails;
