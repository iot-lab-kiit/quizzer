const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
    slot: { type: String },
    correct_score: { type: String, default: 1 },
    incorrect_score: { type: String, default: -1 },
    minutes: { type: String },
    seconds: { type: String },
    startTime: { type: String },
    endTime: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Quiz", quizSchema);
