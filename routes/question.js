const express = require("express");
const router = express.Router();


const {createQuestion, updatetQuestion, deleteQuestion, getAllQuestion} = require("../controllers/question");

router.post("/create", createQuestion);
router.delete("/delete/:id", deleteQuestion);
router.put("/update", updatetQuestion);
router.get("/", getAllQuestion);

module.exports = router;