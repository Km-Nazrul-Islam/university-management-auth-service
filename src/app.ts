import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Testing
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Working Successfully')
})

export default app