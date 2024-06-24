// import Komen from "../models/KomenModel.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import  sequelize  from "sequelize";


// export const getKomen = async(req,res) => {
// try {
//     const response = await Komen.findAll({
// });
//     res.json(response);
// } catch (error) {
//     console.log(error);
//    }
// }



// export const getKomenByMakanan = async(req,res) => {
//     try {
//         const response = await Komen.findAll({
//             where:{
//                 idmakanan:req.params.id
//             }
//     });
//         res.json(response);
//     } catch (error) {
//         console.log(error);
//        }
//     }

//     export const getBintangByMakanan = async(req,res) =>{
//         try {
//             // Query untuk menghitung rata-rata rating berdasarkan idmakanan menggunakan sequelize.literal()
//             const response = await Komen.findOne({
//               attributes: [
//                 [sequelize.literal('avg(rating)'), 'totalbintang']
//               ],
//               where: {
//                   idmakanan:req.params.id
//               }
//             });
            
//             // Mengirimkan response dalam bentuk JSON
//             res.json(response);
//           } catch (error) {
//             // Tangani error jika terjadi
//             console.error('Error:', error);
//             res.status(500).json({ error: 'Internal server error' });
//           }
//     }


// export const buatKomen = async(req,res) => {
//     const  { namakomen, pendapat, idmakanan, rating } = req.body;
//     try {
//         await Komen.create({
//             namakomen: namakomen,
//             pendapat: pendapat,
//             idmakanan: idmakanan,
//             rating: rating
//         });
//         res.json({msg:"Komen Berhasil"});
//     } catch (erorr) {
//         console.log(error);
//     }

// }

// export const hapusKomen = async (req, res) => {
//     try {
//       // Lakukan penghapusan komentar dari database
//       const deletedRows = await Komen.findOne({
//         where: {
//           id:req.params.id // Hapus komentar berdasarkan ID
//         }
//       });
//       if(!deletedRows){
//         res.status(404).json({ error: 'komentar tidak ditemukan' });
        
//       }
//      await deletedRows.destroy();
//       res.status(200).json({ error: 'berhasil' });

//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ error: 'Gagal menghapus komentar' });
//     }
//   };



// export const getKomenById = async(req, res) =>{
//     try {
//         const response = await Komen.findOne({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// // export const hapusKomenTerbaru = async (req, res) => {
// //     try {
// //       // Cari komentar dengan ID terbaru
// //       const latestKomen = await Komen.findOne({
// //         order: [['id', 'DESC']] // Urutkan berdasarkan ID secara descending untuk mendapatkan yang terbaru
// //       });
  
// //       if (!latestKomen) {
// //         // Jika tidak ada komentar ditemukan
// //         return res.status(404).json({ error: 'Komentar tidak ditemukan' });
// //       }
  
// //       // Hapus komentar dengan ID terbaru
// //       await latestKomen.destroy();
  
// //       // Kirim respons sukses
// //       res.status(200).json({ msg: 'Komentar terbaru berhasil dihapus' });
// //     } catch (error) {
// //       console.error('Error:', error);
// //       res.status(500).json({ error: 'Gagal menghapus komentar' });
// //     }
// //   };
import db from "../config/Database.js";

// Mendapatkan semua komentar
export const getKomen = (req, res) => {
  try {
    const query = 'SELECT * FROM komen';
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

// Menambahkan komentar baru
export const buatKomen = (req, res) => {
  const { namakomen, pendapat, idmakanan, rating } = req.body;
  try {
    const query = 'INSERT INTO komen (namakomen, pendapat, idmakanan, rating) VALUES (?, ?, ?, ?)';
    db.query(query, [namakomen, pendapat, idmakanan, rating], (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.sendStatus(500);
      }
      res.json({ msg: "Komen Berhasil" });
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Menghapus komentar berdasarkan ID
export const hapusKomen = (req, res) => {
  const komenId = req.params.id;
  try {
    const query = 'DELETE FROM komen WHERE id = ?';
    db.query(query, [komenId], (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.sendStatus(500);
      }
      res.json({ msg: "Komentar berhasil dihapus" });
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Mendapatkan komentar berdasarkan ID
export const getKomenById = (req, res) => {
  const komenId = req.params.id;
  try {
    const query = 'SELECT * FROM komen WHERE id = ?';
    db.query(query, [komenId], (err, results) => {
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

// Mendapatkan komentar berdasarkan ID makanan
export const getKomenByMakanan = (req, res) => {
  const makananId = req.params.id;
  try {
    const query = 'SELECT * FROM komen WHERE idmakanan = ?';
    db.query(query, [makananId], (err, results) => {
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

// Menghitung rata-rata rating berdasarkan ID makanan
export const getBintangByMakanan = (req, res) => {
  const makananId = req.params.id;
  try {
    const query = 'SELECT AVG(rating) AS totalbintang FROM komen WHERE idmakanan = ?';
    db.query(query, [makananId], (err, results) => {
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