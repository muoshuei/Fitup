const BASE_URL = 'http://127.0.0.1:8000'
export const fetchAvgAccuracyData = async (user_id) => {
    try {
        const response = await fetch(
          `${BASE_URL}/api/chart/avgacc/${user_id}`, 
          {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
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

export const fetchTotalTimeData = async (user_id) => {
  try {
      const response = await fetch(
        `${BASE_URL}/api/chart/totaltime/${user_id}`, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
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

export const fetchAccuracySummaryData = async (user_id) => {
  try {
      const response = await fetch(
        `${BASE_URL}/api/chart/accsumm/${user_id}`, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
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

export const fetchCountsData = async (user_id) => {
  try {
      const response = await fetch(
        `${BASE_URL}/api/chart/counts/${user_id}`, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
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