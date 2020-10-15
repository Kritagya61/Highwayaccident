const router = require("express").Router();

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
  res.render("profile", { user: req.user });
});

module.exports = router;
