import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//routes
import postRoutes from './routes/posts.js';
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());//this should to communicate with react application on localhost

app.use('/posts', postRoutes);

// const CONNECTION_URL = "mongodb+srv://admin:admin123@cluster0.np0od.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false); //not to get any warnings on console