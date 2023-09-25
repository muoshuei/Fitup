const BASE_URL = 'http://localhost:8000'
export const sendSignUpData = async (data) => {
    try {
        const response = await fetch(
          `${BASE_URL}/api/signup`, 
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

export const sendSignInData = async (data) => {
  try {
      const response = await fetch(
        `${BASE_URL}/api/signin`, 
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