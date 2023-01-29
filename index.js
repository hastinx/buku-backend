import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import favoriteRoute from "./routes/r_favorite.js";

const app = express();
mongoose.connect('mongodb+srv://root:password1.@cluster0.3nha40e.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected..'));

app.use(cors());
app.use(express.json());
app.use(favoriteRoute);

app.listen(5000, () => console.log('Server running at port 5000'))