import { BASE_API_URL, handleApiError } from "./utils";

export const getUser = async (id) => {
    try {
        const {data} = await fetch(`${BASE_API_URL}/api/users/${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );
        const d = await data.json();
        return {error: null, data: d};
    } catch(error) {
        return handleApiError(error);
    }
}
export const updateUser = async (formData) => {
    try {
        const {data} = await fetch(`${BASE_API_URL}/api/info`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        );
        const d = await data.json();
        return {error: null, data: d};
    } catch(error) {
        return handleApiError(error);
    }
}