import express, { json } from 'express'
import userRouter from './routers/user.js'
import connect from './db/mongodb.js'

const app = express()
const port = process.env.PORT || 5000

connect()

app.use(express.json());
app.use(userRouter)

app.listen(port, () => {
    console.log("Server is up and running " + port);
});
