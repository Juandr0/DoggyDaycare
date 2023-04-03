import React, { useState, useEffect } from 'react';

const apiUrl = 'https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126'

const Catalogue = (props) => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log('data' + data);
      setDogs(data);
      localStorage.setItem('dogs', JSON.stringify(data.record));
    };

    const cachedDogs = localStorage.getItem('dogs');
    if (cachedDogs) {
      console.log('Dogs are cached!')
      setDogs(JSON.parse(cachedDogs));
    } else {
      console.log('No doggos cached, Fetching!');
      fetchData();
    }

  }, []);

  return (
    <div>
      <h2>Our stars!</h2>
      {dogs.map((dog, index) => (
        <div key={index}>
          <h3>{dog.name}</h3>
          <img src={dog.img} alt={dog.name} />
        </div>
      ))}
    </div>
  );
};

export default Catalogue;
