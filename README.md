# Cryptocurrency App

This is a lightweight full-stack application that provides information about cryptocurrency prices. It consists of two basic pages, the list of all the coins and the detailed coin page. The application uses the Coingecko API as a source of data.

## Technical Details

-The frontend is implemented in React.
-The backend is implemented in NodeJS using ExpressJS.
-The application is designed with Material UI.

## Usage

1. Clone the repository
2. Install dependencies: `nmp install`
3. Start the backend: `node backend.js`
4. Start the frontend: `npm start`

### Backend

The backend works as a proxy of the Coingecko API. When the frontend requests the `/coins/markets` or `/coins/{id}` endpoint, the request is performed to the backend, which then performs the request to the Coingecko API. The backend responds to the frontend only with the fields required for the render.

### List of Coins Page

The landing page of the application is a list of all the coins. Each coin item contains:

-The name
-The symbol
-The current price
-The highest price in the last 24 hours
-The lower price in the last 24 hours
-The price change in percentage of the last 24 hours
-The pagination mechanism implemented requests a specific amount of coins on each request.

<img src="src/cryptomarket.png" alt="list of crypto">

### Coin Details Page

This page contains detailed information about a specific coin. The following information is displayed:

-The current price of the coin
-The coin name
-The coin description
-Price change on the last 24 hours, 7 days, 14 days, 1 month, 2 months, 200 days, 1 year
-The highest price on the last day
-The lowest price on the last day

<img src="src/cryptodetail.png" alt="list of crypto">
