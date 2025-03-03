import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express()
const port = process.env.PORT || 6000

app.use(express.json())

app.use('/users', userRoutes)

sequelize.authenticate()
    .then(()=>console.log('Database connected...'))
    .catch(err=> console.error('Database connection error:', err))

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})