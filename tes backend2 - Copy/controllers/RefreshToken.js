
// import Users from "../models/UserModel.js";
// import  jwt  from "jsonwebtoken";

// export const refreshToken = async(req, res) => {
//     try {
//         const refreshToken = req.cookies.refreshToken;
//         if(!refreshToken)return res.sendStatus(401);
//         const user = await Users.findAll({
//             where:{
//                 refresh_token: refreshToken
//             }
//         });
//         if(!user[0]) return res.sendStatus(403);
//         jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
//             if(err) return res.sendStatus(403);
//             const userId = user[0].id;
//             const name = user[0].name;
//             const email = user[0].email;
//             const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
//                 expiresIn: '15s'
//             });
//             res.json({ accessToken });
//         });
        
//     } catch (error) {
//         console.log(error);
//     }
// }

import db from '../config/Database.js';
import jwt from 'jsonwebtoken';

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    // Query ke database untuk mencari pengguna berdasarkan refresh_token
    const query = 'SELECT * FROM users WHERE refresh_token = ?';
    db.query(query, [refreshToken], (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.sendStatus(500);
      }

      // Jika tidak ada pengguna ditemukan dengan refresh_token yang sesuai
      if (results.length === 0) return res.sendStatus(403);

      const user = results[0];
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);

        const userId = user.id;
        const name = user.name;
        const email = user.email;
        const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '15s'
        });

        res.json({ accessToken });
      });
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};