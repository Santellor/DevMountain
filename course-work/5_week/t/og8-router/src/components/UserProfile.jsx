import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UserProfile = () => {
    const {name, hobby, funFact} = useLoaderData()

    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Hobby: {hobby}</h2>
            <h2>Fun Fact: {funFact}</h2>
        </div>
    )
}

export default UserProfile