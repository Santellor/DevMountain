import { useState } from 'react'
import './App.css'
import InvoiceTable from './components/InvoiceTable'

let deleteRow, editRow, addRow


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Mountain Development Invoices</h1>
      <div className="table">
          <InvoiceTable />
      </div>
    </>
  )
}

export default App
