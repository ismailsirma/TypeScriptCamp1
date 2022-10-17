import express, { Request, Response, NextFunction} from 'express'
import { json } from 'body-parser'

import todoRoues from './routes/todos'

const app = express()

// add, register a middleware with body parser methods json method
// parse body of all incoming requests, extract any json data
// populate body key on data 
app.use(json())

// add routes
app.use('/todos', todoRoues)

// add middleware for errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message})
})

app.listen(3000)