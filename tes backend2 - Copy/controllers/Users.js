// import Users from "../models/UserModel.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";


// export const getUsers = async(req,res) => {
// try {
//     const users = await Users.findAll({
//         attributes:['id', 'name', 'email']
// });
//     res.json(users);
// } catch (error) {
//     console.log(error);
//    }
// }

// export const Register = async(req,res) => {
//     const { name, email, password, confPassword } = req.body;
//     if (password !== confPassword) return res.status(400).json({msg: "Password dan confirm password tidak cocok"});

//     const salt = await bcrypt.genSalt();
//     const hashPassword = await bcrypt.hash(password,salt);
//     try {
//         await Users.create({
//             name: name,
//             email: email,
//             password: hashPassword
//         });
//         res.json({msg:"Register Berhasil"});
//     } catch (erorr) {
//         console.log(error);
//     }

// }

// export const Login = async(req, res) => {
//     try {
//         const user = await Users.findAll({
//         where:{
//             email: req.body.email
//         }
//     });
//     const match = await bcrypt.compare(req.body.password, user[0].password);
//     if(!match) return res.status(400).json({msg: "Password salah"});
//     const userId = user[0].id;
//     const name = user[0].name;
//     const email = user[0].email;
//     const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
//         expiresIn: '20s'
//     });
//     const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
//         expiresIn: '1d'
//     });

//     await Users.update({refresh_token: refreshToken},{
//     where:{
//         id: userId
//     }
//    });
//    res.cookie('refreshToken', refreshToken,{
//     httpOnly : true,
//     maxAge : 24 * 60 * 60 * 1000
//    });
// res.json({ accessToken });
//     } catch (error) {
//        res.status(404).json({msg:"Email tidak ditemukan"}); 

//     }

// }

// export const Logout = async (req, res) => {
//     const refreshToken = req.cookies.refreshToken;
//     if(!refreshToken)return res.sendStatus(204);
//     const user = await Users.findAll({
//         where:{
//             refresh_token: refreshToken
//         }
//     });
//     if(!user[0]) return res.sendStatus(204);
//     const userId = user[0].id;
//     await Users.update({refresh_token: null},{
//         where:{
//             id: userId
//         }
//     });
//     res.clearCookie('refreshToken');
//     return res.sendStatus(200);
// }

// export const getUserById = async(req, res) =>{
//     try {
//         const response = await Users.findOne({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

import db from "../config/Database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Mendapatkan semua pengguna
export const getUsers = (req, res) => {
  try {
    const query = 'SELECT id, name, email FROM users';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.sendStatus(500);
      }
      res.json(results);
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Registrasi pengguna
export const Register = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  if (password !== confPassword) return res.status(400).json({ msg: "Password dan confirm password tidak cocok" });

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, hashPassword], (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.sendStatus(500);
      }
      res.json({ msg: "Register Berhasil" });
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Login pengguna
export const Login = async (req, res) => {
  try {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [req.body.email], async (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.sendStatus(500);
      }

      if (results.length === 0) {
        return res.status(404).json({ msg: "Email tidak ditemukan" });
      }

      const user = results[0];
      const match = await bcrypt.compare(req.body.password, user.password);

      if (!match) {
        return res.status(400).json({ msg: "Password salah" });
      }

      const { id, name, email } = user;

      // Generate access token
      const accessToken = jwt.sign({ userId: id, name, email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '20s' // Sesuaikan dengan expiration time yang diinginkan
      });

      // Generate refresh token
      const refreshToken = jwt.sign({ userId: id, name, email }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '1d'
      });

      // Simpan refresh token di database
      const updateQuery = 'UPDATE users SET refresh_token = ? WHERE id = ?';
      db.query(updateQuery, [refreshToken, id], (err, updateResult) => {
        if (err) {
          console.error('Error updating database:', err);
          return res.sendStatus(500);
        }

        // Set cookie refreshToken
        res.cookie('refreshToken', refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.json({ accessToken });
      });

    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Logout pengguna
export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);

  const query = 'UPDATE users SET refresh_token = NULL WHERE refresh_token = ?';
  db.query(query, [refreshToken], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.sendStatus(500);
    }

    // Hapus cookie refreshToken
    res.clearCookie('refreshToken');
    res.sendStatus(200);
  });
};

// Mendapatkan pengguna berdasarkan ID
export const getUserById = (req, res) => {
  try {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [req.params.id], (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.sendStatus(500);
      }
      res.json(results[0]);
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};