import cors from 'cors'
import express, { Application, Request } from 'express'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Testing
app.get('/', (req: Request, res: anay) => {
  res.send('Working Smoothly')
})

export default app
