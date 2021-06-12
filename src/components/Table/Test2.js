import React from 'react'

function Test2({register}) {
    return (
        <input type="text" defaultValue="hehe" {...register('text')} />
    )
}

export default Test2
