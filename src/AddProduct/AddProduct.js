import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product`
        fetch(url,  {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        
    };



    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a new user</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' type="text" {...register("name" )} />
                <textarea className='mb-2' placeholder='description' type="text" {...register("description")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input value="Add product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;