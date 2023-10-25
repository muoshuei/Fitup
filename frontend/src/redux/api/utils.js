export const BASE_API_URL = process.env.REACT_APP_API_URL;
export const handleApiError = async (error) => {
    try {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      const data = null;
      return { error: errorMessage, data };
    } catch (err) {
      throw new Error("Some unexpected error occurred.");
    }
  };