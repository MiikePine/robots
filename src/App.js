import React, { useState, useEffect } from 'react';
import RobotList from './robotList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './index.css';
import './App.css';


function App() {
  const [cartoes, setCartoes] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setCartoes(users));
  }, []);

  const onSearchChange = event => {
    setSearchfield(event.target.value);
  };

  const filteredCartoes = cartoes.filter(cartao => {
    return cartao.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className='tc'>
      <h1>Robots Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      {cartoes.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <Scroll>
          <RobotList cartoes={filteredCartoes} />
        </Scroll>
      )}
    </div>
  );
}

export default App;
