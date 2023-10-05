// src/components/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard({ username }) {
  const [data, setData] = useState([]); // Replace with your data
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  // Function to filter data based on filter option
  const filteredData = data.filter(item => item.someProperty === filter);

  // Function to filter data based on search input
  const searchedData = filteredData.filter(item => item.name.includes(search));

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <div>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">Filter Option</option>
          {/* Add filter options */}
        </select>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            {/* Table header */}
          </tr>
        </thead>
        <tbody>
          {searchedData.map((item, index) => (
            <tr key={index}>
              {/* Table rows */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;