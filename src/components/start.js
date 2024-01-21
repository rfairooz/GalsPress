async function fetchData() {
    try {
      const response = await fetch('http://127.0.0.1:5000/');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.text();
      console.log('Data from Flask server:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  // Call the function when needed
  fetchData();