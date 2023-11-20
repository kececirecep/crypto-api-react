import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {
  const [coinState, setCoinState] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getCoin() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
        setCoinState(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCoin();
  }, [search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coinState.filter((item) => {
    return (
      item.name.includes(search) || item.symbol.includes(search)
    );
  });

  return (
    <div className="App py-6">
        <input onChange={handleSearch} className='w-1/2 bg-[#eee] text-black  rounded p-2 mt-3 fixed top-1/1 left-1/2 transform -translate-x-1/2 -translate-y-1/2' type="search" placeholder='Search' /> 
        {
      filteredCoins.map(item => {
        return (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            symbol={item.symbol}
            current_price={item.current_price}
            price_change_24h={item.price_change_24h}
          />
        );
      })
    }
    </div>
  );
}

export default App;
