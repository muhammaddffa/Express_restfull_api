import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js";


const app = express();

// const PORT = process.env.PORT;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(ProductRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server up and running on port: ${process.env.PORT}`);
});