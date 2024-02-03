const express = require("express");
const { register, login, deleteUser, updateUser,
    getSingleUser, getAllUser } = require("../controllers/userController");
const router = express.Router();

router.post("/registeration", register)
router.post("/login", login)
router.delete('/delete/:id', deleteUser)
router.put('/update/:id', updateUser)
router.get('/allUser', getAllUser)
router.get('/getSigleUser/:id', getSingleUser)



module.exports = router;