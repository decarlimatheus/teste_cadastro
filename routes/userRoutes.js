const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.createUser);
router.post("/", UserController.createPost);
router.get("/table", UserController.showAll);
router.get("/edit/:email", UserController.edit);
router.post("/update/:email", UserController.update);
router.post("/delete/:email", UserController.delete);

module.exports = router;
