import React from 'react'
import TableRow from './TableRow'
import TableHeader from './TableHeader';
import AddButton from './AddButton';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const InvoiceTable = () => {
    
   const [rowData, setRowData] = useState([])

   const addRow = () => {
        const newRow = {description:`New Job`, rate:0, hours: 0, isEditing: true}

        axios.post('/newInvoice', newRow)
            .then((res) => {
                setRowData([...rowData, res.data])
            })
   
    }

   const deleteRow = async (idOfDoom) => {
        
        console.log(`I HIT THE DANGER BUTTON for ${idOfDoom}`)

        const res = await axios.delete(`/deleteInvoice/${idOfDoom}`)

        console.log (res.data)
        setRowData(res.data)

    }

   useEffect(() => {
    console.log(`useEffect`)
    axios.get('/invoices')
        .then((res) => {
            console.log(res.data)
         setRowData(res.data)
        }) 
}, [])

    const editRow = async (id, body) => {   
        console.log(`editRow fired`)
        console.log('Row with id:', id)
        console.log('body object:', body)
        
        const {data} = await axios.put(`/updateInvoice/${id}`, body)
            console.log(`data:`, data)
            setRowData(data)
    }

   const tableRows = rowData.map((element) => 
        <TableRow 
        initIsEditing={element.isEditing? true: false}
        initDescription={element.description}
        initRate={element.rate}
        initHours={element.hours}
        key={element.id}
        deleteRow = {() => deleteRow(element.id)}
        editRow = {editRow}
        id={element.id}
        />)

  return (
   <table>
        <thead>
            <TableHeader />
        </thead>

        <tbody>
            {tableRows}
        </tbody>

        <tfoot>
            <AddButton addRow={addRow}/>
        </tfoot>
    </table> 
  )
}

export default InvoiceTable