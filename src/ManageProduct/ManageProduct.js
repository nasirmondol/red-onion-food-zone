import React from 'react';
import useProduct from '../hook/useProduct';

const ManageProduct = () => {
    const [breakfasts, setBreakfasts] = useProduct();

    const handleDeleteButton = id =>{
        const proceed = window.confirm('Are you want to sure delete?')
        if(proceed){
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = breakfasts.filter(breakfast =>breakfast._id !== id)
                setBreakfasts(remaining)
            })
        }
    }
    return (
        <div>
            <h2>Please manage your product  here.</h2>
            {
                breakfasts.map(breakfast => <li key={breakfast._id}>
                    {breakfast.name}
                    <button onClick={() => handleDeleteButton(breakfast._id)}> X</button>
                    </li>)
            }
        </div>
    );
};

export default ManageProduct;