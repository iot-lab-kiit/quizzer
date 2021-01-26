let Quiz = require("../models/quiz");

exports.getQuizById = (req, res) => {
  Quiz.findById(req.params.id)
    .populate("questions")
    .exec(function (err, quiz) {
      if (err) {
        console.log(err);
      } else {
        res.send(quiz);
      }
    });
};

exports.createQuiz = (req, res) => {
  const quiz = new Quiz({
    name: req.body.name,
    description: req.body.description,
    slot: req.body.slot,
    reward: req.body.reward,
    correct_score: req.body.correct_score,
    incorrect_score: req.body.incorrect_score,
    startTime: req.body.start,
    endTime: req.body.end,
    minutes: req.body.minutes,
    seconds: req.body.seconds,
  });
  quiz.save((err, quiz) => {
    if (err) {
      res.status(400).json({
        error: "error saving quiz in DB",
      });
    }
    res.json(quiz);
  });

};

exports.getallQuiz = (req, res) => {
  Quiz.find().populate("questions").exec(function (err, allQuiz) {
    if (err) {
      console.log(err);
    } else {
      res.send(allQuiz);
    }
  });
};

exports.updateQuiz = (req, res) => {
  var newData = {
    name: req.body.name,
    description: req.body.description,
    slot: req.body.slot,
    correct_score: req.body.correct_score,
    incorrect_score: req.body.incorrect_score,
    startTime: req.body.start,
    endTime: req.body.end,
    minutes: req.body.minutes,
    seconds: req.body.seconds,
  };
  Quiz.findByIdAndUpdate(
    req.params.id,
    { $set: newData },
    function (err, quiz) {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/quiz/" + quiz._id);
      }
    }
  );
};

exports.deleteQuiz = (req, res) => {
  Quiz.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      console.log("PROBLEM!");
    } else {
      res.send("succes")
    }
  });
};
