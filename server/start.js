async function sendAndFetchData() {
    try {
      // Data to send
      const dataToSend = {
        key1: 'helloraidahyousuck',
        key2: 'value2',
        // Add your data here
      };
  
      // Sending data
      const sendResponse = await fetch('https://87f0-34-148-254-180.ngrok-free.app/run-script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
  
      if (!sendResponse.ok) {
        throw new Error('Error sending data');
      }
      console.log('Data being sent to Flask server:', dataToSend);
      // Fetching response
      const fetchResponse = await fetch('http://172.28.0.12:5000/');
      
      if (!fetchResponse.ok) {
        throw new Error('Error fetching data');
      }
  
      const responseData = await fetchResponse.json();
      console.log('Response from Flask server:', responseData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Call the function when needed
  sendAndFetchData();
  