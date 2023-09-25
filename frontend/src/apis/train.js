const BASE_URL = 'http://localhost:8000'
export const sendTrainData = async (data) => {
    try {
        const response = await fetch(
          `${BASE_URL}/api/train`, 
          {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
          },
          
        )
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      } catch (error) {
        throw error;
      }
};