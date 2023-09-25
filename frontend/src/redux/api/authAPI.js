import { handleApiError } from "./utils";

const BASE_URL = 'http://localhost:8000'
export const signIn = async (formData) => {
    try {
      const res = await fetch(`${BASE_URL}/api/signin`, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      const d = await res.json()
      return { error: null, data: d};
    } catch (error) {
      return handleApiError(error);
    }
  };
  
  export const signUp = async (formData) => {
    try {
      const res = await fetch(`${BASE_URL}/api/signup`, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      const d = await res.json();
      return { error: null, data: d};
    } catch (error) {
      return {
        error: error.response.data.errors,
        data: null,
      };
    }
  };
  
  export const logout = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/logout`, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { error: null, data: res.data };
    } catch (error) {
      return handleApiError(error);
    }
  };

  export const updateUserData = async (formData) => {
    try {
      const res = await fetch(`${BASE_URL}/api/userdata`, 
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      const d = await res.json()
      return { error: null, data: d};
    } catch (error) {
      return handleApiError(error);
    }
  };