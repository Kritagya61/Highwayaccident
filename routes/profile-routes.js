const moment = require("moment");
const router = require("express").Router();
const FeedBackModel = require("../models/feedback-model");

router.get("/", (req, res) => {
  res.render("profile", { user: req.user });
});

router.get("/details", async (req, res) => {
  try {
    let highwaylist = [];
    let recenthighway = [];
    highwaylist = await FeedBackModel.find();
    for (var i = 0; i < highwaylist.length; i++) {
      var date1 = new Date();
      var date2 = highwaylist[0].date;
      var date3 = moment(date1, "dd MMM DD HH:mm:ss ZZ YYYY", "en");
      var date4 = moment(date2, "dd MMM DD HH:mm:ss ZZ YYYY", "en");
      var diff = date4.diff(date3, "days");
      if (diff < 7) {
        recenthighway.push(highwaylist[i]);
      }
    }
    res.json(recenthighway);
  } catch (error) {
    res.json({ error });
  }
});

router.post("/", (req, res) => {
  console.log(req.body);
  let feedback = new FeedBackModel();
  feedback.highwayname = req.body.highwayname;
  feedback.description = req.body.description;
  feedback.petrol = req.body.petrol;
  feedback.roads = req.body.roads;
  feedback.experience = req.body.experience;
  console.log(feedback);
  feedback
    .save()
    .then((result) => {
      res.render("profile", { user: req.user });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
