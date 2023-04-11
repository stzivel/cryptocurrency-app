const express = require("express");
const axios = require("axios");

const app = express();

const API_BASE_URL = "https://api.coingecko.com/api/v3";

app.get("/coins/markets", async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/coins/markets`, {
      params: {
        vs_currency: "eur",
        order: "market_cap_desc",
        per_page: 50,
        page: 1,
      },
    });
  
  
  const coins = response.data.map((coin)=>({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    image: coin.image,
    current_price: coin.current_price,
    high_24h: coin.high_24h,
    low_24h: coin.low_24h,
    price_change_percentage_24h: coin.price_change_percentage_24h,

}))

res.json(coins);

} catch (error) {
    console.log(error);
  }

});


app.get('/coins/:id', async (req,res)=>{
    try{
        const {id} = req.params;

        const response = await axios.get(`${API_BASE_URL}/coins/${id}`,{
            params: {
                tickers: false,
                market_data:true,
            }
        })

        const coin = {
            id: response.data.id,
            symbol: response.data.symbol,
            name: response.data.name,
            description: response.data.description.en,
            current_price: response.data.market_data.current_price.eur,
            price_change_24h: response.data.market_data.price_change_percentage_24h_in_currency?.eur,
            price_change_7d: response.data.market_data.price_change_percentage_7d_in_currency?.eur,
            price_change_14d: response.data.market_data.price_change_percentage_14d_in_currency?.eur,
            price_change_30d: response.data.market_data.price_change_percentage_30d_in_currency?.eur,
            price_change_60d: response.data.market_data.price_change_percentage_60d_in_currency?.eur,
            price_change_200d: response.data.market_data.price_change_percentage_200d_in_currency?.eur,
            price_change_1y: response.data.market_data.price_change_percentage_1y_in_currency?.eur,
            image: response.data.image.small,
            high_24h: response.data.market_data.high_24h.eur,
            low_24h: response.data.market_data.low_24h.eur,

        }

        res.json(coin);




    } catch(error){
        console.log(error);
    }
})


const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})







