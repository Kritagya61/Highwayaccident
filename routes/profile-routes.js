const router = require("express").Router();
const FeedBackModel = require("../models/feedback-model");
// const authCheck = (req, res, next) => {
//     if (!req.user) {
//         res.redirect('/auth/login');
//     } else {
//         next();
//     }
// };

router.get("/", (req, res) => {
  res.render("profile", { user: req.user });
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
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
  res.render("profile", { user: req.user });
});

module.exports = router;
