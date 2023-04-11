import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Stack, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CryptoMarket() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/coins/markets")
      .then((response) => {
        setCoins(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Stack flexWrap="wrap" justifyContent="center" gap={2} sx={{flexDirection: { sx: "column", sm: "row" }}}>
      {loading ? (
        <p>Loading..</p>
      ) :
      (
        coins.map((coin) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: '1rem'
              
            }}
          >
            <Card sx={{width: { xs: '300px', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
            <Link key={coin.id} to={`/coins/${coin.id}`} style={{textDecoration:'none'}}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "left",
                  color: "#0cbaba",
                  bgcolor:"#000",
                  boxShadow:'0px 2px 10px rgba(0, 0, 0, 0.25)',
                  border:'1px solid #0cbaba',
                  
                  "&:hover":{bgcolor: '#414141'}
                  
                  
                }}
              >
                <CardMedia
                  image={coin.image}
                  alt={coin.name}
                  sx={{
                    borderRadius: "50%",
                    height: "120px",
                    width: "120px",
                    mb: 2,
                    border: "1px solid #e3e3e3",
                  }}
                />
  
                <Typography variant="h5" sx={{fontWeight:'bold'}}>{coin.name}</Typography>
  
                <Typography
                  sx={{ fontSize: "15px", fontWeight: 500, color: "gray", fontWeight:'bold' }}
                >
                  
                  <span style={{color:'#8753e9'}}>Price: &nbsp;</span>
                  {coin.current_price.toLocaleString()}€
                </Typography>
  
                <Typography
                  sx={{ fontSize: "15px", fontWeight: 500, color: "gray" , fontWeight:'bold' }}
                >
                  
                  <span style={{color:'#8753e9'}}>Highest 24h price: &nbsp;</span>
                  {coin.high_24h.toLocaleString()}€
                </Typography>
  
                <Typography
                  sx={{ fontSize: "15px", fontWeight: 500, color: "gray" , fontWeight:'bold'}}
                >
                  
                  <span style={{color:'#8753e9'}}>Lowest 24h price: &nbsp;</span>
                  {coin.low_24h.toLocaleString()}€
                </Typography>
  
                <Typography
                  sx={{ fontSize: "15px", fontWeight: 500, color: "gray" , fontWeight:'bold'}}
                >
                  
                  <span style={{color:'#8753e9'}}>Price change of the last 24h: &nbsp;</span>
                  {coin.price_change_percentage_24h.toLocaleString()}%
                </Typography>
              </CardContent>
            </Link>

            </Card>
           
          </Box>
        ))
      )}
      
    </Stack>
  );
}

export default CryptoMarket;
