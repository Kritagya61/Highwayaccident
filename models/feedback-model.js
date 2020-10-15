const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  highwayname: String,
  description: String,
  petrol: String,
  roads: String,
  experience: String,
});

const FeedBack = mongoose.model("feedback", FeedbackSchema);

module.exports = FeedBack;
