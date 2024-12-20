import axios from 'axios';

const API_BASE_URL = 'http://localhost:3004';

// Function to create a new item
export const createItem = async (itemData) => {
    try {
        console.log('Sending request to create item:', itemData);
        
        const response = await axios.post(`${API_BASE_URL}/items`, itemData, {
            headers: {
                'Content-Type': 'application/json', // Setting the content type to JSON
            }
        });

        console.log('Item created:', response.data);
        return response.data; // Return the created item data from the response
    } catch (error) {
        console.error('Error caught in createItem:', error.message);
        throw error;
    }

    
};

export const fetchItems = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/items`);
        return response.data;  // Return the list of items
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch items');
    }
};

export const updateItem = async (id, itemData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/items/${id}`, itemData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;  // Return the updated item
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to update item');
    }
};

export const deleteItem = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/items/${id}`);
        return response.data;  // Return the deleted item data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to delete item');
    }
};
