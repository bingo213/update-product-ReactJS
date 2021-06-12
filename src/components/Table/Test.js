import React from 'react'
import { useForm } from 'react-hook-form'
import Test2 from './Test2';

function Test() {
    const {register, handleSubmit} = useForm()

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Test2 register={register}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Test
