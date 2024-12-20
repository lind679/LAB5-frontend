import React, {useState} from 'react'
import { createItem } from '../api/api'

const Create = () => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newItem = {
            name,
            quantity: parseInt(quantity, 10), // Ensure quantity is a number
        };

        try {
            const createdItem = await createItem(newItem);
            setMessage(`Item "${createdItem.name}" created successfully!`);
            setName('');
            setQuantity('');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };
  return (
    <div>
    <h2>Create New Item</h2>
    {message && <p>{message}</p>}
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
        </div>
        <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
            />
        </div>
        <button type="submit">Create Item</button>
    </form>
</div>
  )
}

export default Create