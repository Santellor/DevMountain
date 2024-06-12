import React from 'react'

// const ModeButtons = (props) => {
// const {isEditing} = props      is the same

const ModeButtons = ({isEditing, edit, deleteRow}) => {

    if (isEditing) {
        return (
            <td>
                <button onClick={edit}>Save</button>
            </td>
        )
    } else {
        return (
            <td>
                <button onClick={deleteRow}>Delete</button>
                <button onClick={edit}>Edit</button>
            </td>          
        )
       
    }

  
}

export default ModeButtons