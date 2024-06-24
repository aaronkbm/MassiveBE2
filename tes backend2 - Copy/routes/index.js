// import express from "express";
// import { getUsers, Register, Login, Logout , getUserById} from "../controllers/Users.js";
// import { verifyToken } from "../middleware/VerifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";

// import { getKomen,getKomenById,buatKomen,getKomenByMakanan, 
//     getBintangByMakanan, hapusKomen  } from "../controllers/Komen.js";

// const router = express.Router();

// router.get('/users', verifyToken, getUsers);
// router.post('/users', Register);
// router.post('/login', Login);
// router.get('/token', refreshToken);
// router.delete('/logout', Logout);
// router.get('/users/:id', getUserById);

// router.get('/komen', getKomen)
// router.post('/komen', buatKomen)
// router.get('/komen/:id', getKomenById)
// router.get('/makanan/:id', getKomenByMakanan)
// router.get('/bintang/:id', getBintangByMakanan)
// // router.delete('/komen', hapusKomenTerbaru)
// router.delete('/komen/:id', hapusKomen)

// export default router;

import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
  getUserById
} from "../controllers/Users.js";
import {
  getKomen,
  getKomenById,
  buatKomen,
  getKomenByMakanan,
  getBintangByMakanan,
  hapusKomen
} from "../controllers/Komen.js";
import {
  verifyToken
} from "../middleware/VerifyToken.js";
import {
  refreshToken
} from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/users/:id', getUserById);

router.get('/komen', getKomen);
router.post('/komen', buatKomen);
router.get('/komen/:id', getKomenById);
router.get('/makanan/:id', getKomenByMakanan);
router.get('/bintang/:id', getBintangByMakanan);
router.delete('/komen/:id', hapusKomen);

export default router;