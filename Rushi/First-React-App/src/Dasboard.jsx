import React, { useState, useEffect } from 'react';
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
      const response = await fetch('https://dae4ebe4-bd07-4680-b672-e008113837ee.mock.pstmn.io/categories/list');  // Replace with your actual API URL
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

    // Automatically call API when the component mounts
    useEffect(() => {
      callApi();
    }, []); // Empty dependency array ensures this runs only once on mount

  return (
       <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="text-center w-full px-4">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Welcome to the <span className="text-yellow-300">Dashboard</span>
        </h1>

      {/* // Link that triggers the API call
      // <button  */}
      {/* //   onClick={callApi} 
      //   className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      // >
      //   Call API
      // </button> */}

      {/* Loading state */}
      {loading && <p>Loading...</p>}
      
      {/* Display API data */}
      {apiData && (
        <div  className="mt-8 bg-white p-4 rounded shadow-lg w-full">
          {/* <h2>API Response:</h2> */}
          <pre className="text-gray-700">{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
      
      {/* Display error if any */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
    </div>
  );
};

export default Dashboard;
   
    
