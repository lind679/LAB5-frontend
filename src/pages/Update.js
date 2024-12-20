import React, {useState} from 'react'
import { updateItem } from '../api/api'

const Update = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedItem = {
            name,
            quantity: parseInt(quantity, 10),
        };

        try {
            const result = await updateItem(id, updatedItem);
            setMessage(`Item "${result.name}" updated successfully!`);
            setId('');
            setName('');
            setQuantity('');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };
  return (
    <div>
            <h2>Update Item</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">Item ID:</label>
                    <input
                        type="text"
                        id="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>
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
                <button type="submit">Update Item</button>
            </form>
        </div>
  )
}

export default Update