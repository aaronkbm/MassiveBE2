// import jwt from "jsonwebtoken";

// export const verifyToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//     if(token == null) return res.sendStatus(401);
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, decoded) => {
//         if(err) return res.sendStatus(403);
//         req.email = decoded.email;
//         next();
//     })
// }

import jwt from "jsonwebtoken";
import db from "../config/Database.js";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);

    const userEmail = decoded.email;

    // Query ke database untuk memeriksa apakah refresh token valid
    const query = 'SELECT * FROM users WHERE email = ? AND refresh_token = ?';
    db.query(query, [userEmail, token], (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.sendStatus(500);
      }

      if (results.length === 0) {
        return res.sendStatus(403); // Token tidak valid
      }

      req.email = decoded.email;
      next();
    });
  });
};