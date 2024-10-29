import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import dotenv from "dotenv";
import mongoose from 'mongoose'

dotenv.config();

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Angel's E-commerce");
});

// app.use(
//     "/api/v1/cloudSa-africa",
//   );
  
  const PORT = process.env.PORT || 3000;
  
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });

  mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error(err));