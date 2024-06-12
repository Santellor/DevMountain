// import
import express from 'express'
import ViteExpress from 'vite-express'
import funkyHandlers from './controller.js'

//express instance
const app = express()
const port = 9001

//middleware
app.use(express.json())

//endpoints
const {invoices, newInvoice, deleteInvoice, updateInvoice} = funkyHandlers

app.get('/invoices', invoices)

app.post('/newInvoice', newInvoice)

app.delete('/deleteInvoice/:id', deleteInvoice)

app.put('/updateInvoice/:id', updateInvoice)

//open server with .listen
ViteExpress.listen(app, port, () => console.warn(`HE'S TOO POWERFUL link: http://localhost:9001`))
