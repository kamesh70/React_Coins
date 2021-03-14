// import logo from './logo.svg';

import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Coin from './Coin';

function App() {

  const [coins, SetCoins] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coinpaprika.com/v1/coins')
      .then(res => {
        SetCoins(res.data);
      }).catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="coin-App">
      <div className="coin-search">
        <h1 className="coin-text">search a currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            is_new={coin.is_new}
            type={coin.type}
          />
        );
      })}
    </div>
  );
}

export default App;
