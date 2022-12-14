import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRoute from './routes/user.routes'
import tasksRoute from './routes/tasks.routes'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(
    cors({
        origin: true,
  })
);
app.use(morgan('dev'))

app.use('/api/users', userRoute)

app.use('/api/tasks', tasksRoute)


export default app;