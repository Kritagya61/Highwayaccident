const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PermitSchema = new Schema({
  brandname: String,
  shopname: String,
  highwayname: String,
  shoptype: String,
  shopdesc: String,
});

const Permit = mongoose.model("permit", PermitSchema);

module.exports = Permit;
