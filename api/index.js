import express from 'express'
import indexRoutes from './routes/tasks.routes.js'
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors("*"))
app.use(indexRoutes)

app.listen(3000)
console.log('Server on port ${3000}')