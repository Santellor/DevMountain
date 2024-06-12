import React from 'react'

const AddButton = ({addRow}) => {
  return (
    <tr>
        <td></td>
        <td colSpan={10}>
            <button onClick={addRow}>Add</button>
        </td>

    </tr>
  )
}

export default AddButton