import React from 'react'
import ModeButtons from './ModeButtons'
import Description from './Description'
import Rate from './Rate'
import Hours from './Hours'
import formatCurrency from '../assets/formatCurrency.js'
import { useState } from 'react'

const TableRow = ({initIsEditing, initDescription, initRate, initHours, deleteRow, editRow, id}) => {
  
  const [isEditing, setIsEditing] = useState(initIsEditing)
  const [description, setDescription] = useState(initDescription)
  const [rate, setRate] = useState(initRate)
  const [hours, setHours] = useState(initHours)
  
  const amount = formatCurrency(rate * hours) 

  const edit = () => {
    setIsEditing(!isEditing)
    console.log(`edit was hit`)

    const editedRow = {
      id: id,
      description: description,
      rate: rate,
      hours: hours
    }
    console.log(id)
    console.log(editedRow)

    isEditing ? editRow(id, editedRow) : null
  }

  return (
    <tr>
        <ModeButtons isEditing={isEditing} edit={edit} deleteRow={deleteRow}/>
        <Description isEditing={isEditing} value={description} setDescription = {setDescription}/>
        <Rate isEditing={isEditing} value={rate} setRate={setRate}/>
        <Hours isEditing={isEditing} value={hours} setHours={setHours}/>
        <td>{amount}</td>
    </tr>
  )
}

export default TableRow