import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import './App.css';

import Raffle from './Pages/Raffle';
import Raffles from './Components/Raffles';
import SearchBar from './Components/Searchbar';
import NewRaffle from './Components/NewRaffle';


const API_URL = process.env.REACT_APP_API_URL;


function App() {
  const [raffles, setRaffles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterText, setFilterText] = useState("");

  async function fetchData() {
    try {
      const response = await fetch(`${API_URL}/raffles`);
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const data = await response.json();
      const sortedRaffles = data.data.sort((a, b) => b.id - a.id);
      setRaffles(sortedRaffles);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const filteredRaffles = raffles.filter((raffle) =>
    `${raffle.name}`
      .toLowerCase()
      .includes(filterText.toLowerCase())
  );


  const renderData = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (filteredRaffles.length === 0) {
      return <p>No results matching: "{filterText}"</p>;
    } else {
      return (
        <div className="raffleList">
          {filteredRaffles.map((raffle) => (
            <Raffles key={raffle.id} raffle={raffle} />
          ))}
        </div>
      );
    }
  };

  const handleRaffleChanges = (newRaffle) => {
    setRaffles([newRaffle, ...raffles]);
  };
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <NewRaffle handleRaffleChanges={handleRaffleChanges} />
              <h3 className='raffleH3'>All Raffles</h3>
              <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
              {renderData()}
            </>}
          />
          <Route path='/raffles/:id' element={<Raffle />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
