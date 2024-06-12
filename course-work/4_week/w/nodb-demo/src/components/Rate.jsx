import React from 'react'
import formatCurrency from '../assets/formatCurrency.js'


const Rate = ({isEditing, value, setRate}) => {
    

    if (isEditing) {
        return (
            <td>
                <input type="text" value={value} onChange={(e) => setRate(e.target.value)}/>
            </td>
        )
    } else {
        return (
            <td>
                {formatCurrency(value)}
            </td>          
        )
        
    }
}

export default Rate