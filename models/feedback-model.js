const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  highwayname: String,
  description: String,
  petrol: String,
  roads: String,
  experience: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const FeedBack = mongoose.model("feedback", FeedbackSchema);

module.exports = FeedBack;
