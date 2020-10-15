const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("permit", { user: req.user });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.render("permit", { user: req.user });
});
module.exports = router;
