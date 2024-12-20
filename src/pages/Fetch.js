import React, {useEffect, useState} from 'react'
import { fetchItems, deleteItem } from '../api/api'

const Fetch = () => {
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState('');

    // Fetch items when the component mounts
    useEffect(() => {
        const getItems = async () => {
            try {
                const data = await fetchItems();
                setItems(data);
            } catch (error) {
                setMessage(`Error: ${error.message}`);
            }
        };
        getItems();
    }, []);

    const handleDelete = async (id) => {
        try {
            const deletedItem = await deleteItem(id);
            setItems(items.filter(item => item._id !== deletedItem._id)); // Remove deleted item from the state
            setMessage(`Item "${deletedItem.name}" deleted successfully!`);
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };
  return (
    <div>
            <h2>Items List</h2>
            {message && <p>{message}</p>}
            <ul>
                {items.map((item) => (
                    <li key={item._id}>
                        {item.name} - {item.quantity}
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default Fetch