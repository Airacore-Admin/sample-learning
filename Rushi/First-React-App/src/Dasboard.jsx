import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Function to call the API
  const callApi = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://5810e0d4-2fcd-43d9-a763-67efc485988e.mock.pstmn.io/categories/list');  // Replace with your actual API URL
      if (response.ok) {
        const data = await response.json();
        setApiData(data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      
      {/* Link that triggers the API call */}
      <button 
        onClick={callApi} 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Call API
      </button>
      
      {/* Loading state */}
      {loading && <p>Loading...</p>}
      
      {/* Display API data */}
      {apiData && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
      
      {/* Display error if any */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Dashboard;
