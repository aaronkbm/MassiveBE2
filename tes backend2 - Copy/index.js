// import express from "express";
// import db from "./config/Database.js";
// import router from "./routes/index.js";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";


// dotenv.config();

// const app = express()
// const port = 1000



// try{
//   await db.authenticate();
//   console.log('Database Connected');
 
// } catch(error) {
//   console.error(error);
// }

// app.use(cors({ credentials:true, origin:'http://localhost:5173' }));
// app.use(cookieParser());
// app.use(express.json());
// app.use(router);

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`)
// })

import express from 'express';
import db from './config/Database.js'; // Import koneksi database
import router from './routes/index.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 1000; // Gunakan PORT dari environment jika ada

// Menggunakan CORS dengan konfigurasi tertentu
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(cookieParser());
app.use(express.json());



// Menggunakan router
app.use(router);

// Menjalankan server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});