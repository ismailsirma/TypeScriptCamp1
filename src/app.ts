import express, { Request, Response, NextFunction} from 'express'
import todoRoues from './routes/todos'

const app = express()

// add routes
app.use('/todos', todoRoues)

// add middleware for errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message})
})

app.listen(3000)