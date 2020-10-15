const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("permit", { user: req.user });
});

module.exports = router;
