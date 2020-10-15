const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("profile", { user: req.user });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.render("profile", { user: req.user });
});

module.exports = router;
