const express = require("express");
const router = express.Router();

const {getQuizById,createQuiz,getallQuiz,updateQuiz, deleteQuiz} = require("../controllers/quiz");

router.post("/create", createQuiz);
router.delete("/delete/:id", deleteQuiz);
router.put("/update", updateQuiz);
router.get("/", getallQuiz);
router.get("/:id", getQuizById);

module.exports = router;