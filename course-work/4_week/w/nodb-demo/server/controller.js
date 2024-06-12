let invoiceData = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ];

  let globalId = 4

  const funkyHandlers = {
    invoices: (req, res) => {
        res.status(200).send(invoiceData)
    },
    newInvoice: (req, res) => {
        const newRow = req.body

        newRow.id = globalId

        invoiceData.push(newRow)
        
        globalId++

        res.status(200).send(newRow)
    },

    deleteInvoice: (req, res) => {
        const {id} = req.params

       invoiceData = invoiceData.filter((element) => element.id !== +id)

       res.status(200).send(invoiceData)
    },

    updateInvoice: (req, res) => {
        const {id} = req.params
        const editElement = req.body
        
        editElement.id = +id
        editElement.isEditing = false

       invoiceData = invoiceData.map((element) => element.id === +id ?
       element = editElement : 
       element = element)

       res.status(200).send(invoiceData)
    }



  }

  export default funkyHandlers