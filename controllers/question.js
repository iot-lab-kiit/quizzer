const Question = require("../models/question");

exports.createQuestion = (req, res) => {
  const question = new Question(req.body);
  question.save((err, item) => {
    if (err) {
      res.status(400).json({
        error: "error saving Question in DB",
      });
    }
    res.json(item);
  });
};

exports.deleteQuestion = (req, res) => {
  Question.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.status(400).json({
        error: "error deleting Question in DB",
      });
    }
    res.json({
      message: "Deleted",
      questiondeleted,
    });
  });
};

exports.updatetQuestion = (req, res) => {
  Question.updateOne(
    { _id: req.body._id },
    { $set: req.body },
    (err, questionUpdated) => {
      if (err) {
        res.status(400).json({
          error: "error updating Question in DB",
        });
      }
      res.json({
        message: "Updated",
        questionUpdated,
      });
    }
  );
};

exports.getAllQuestion = (req, res) => {
  Question.find().sort([["name", "asc"]]).exec((err, questions)=>{
      if(err){
        res.status(400).json({
            error: "error getting Question from DB",
          });
      }
      res.json(questions);
  });
};
