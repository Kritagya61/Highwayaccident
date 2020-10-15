const router = require("express").Router();
const PermitModel = require("../models/permit-model");

router.get("/", (req, res) => {
  res.render("permit", { user: req.user });
});

router.post("/", (req, res) => {
  console.log(req.body);
  let permit = new PermitModel();
  permit.brandname = req.body.brandname;
  permit.shopname = req.body.shopname;
  permit.shoptype = req.body.shoptype;
  permit.shopdesc = req.body.shopdesc;
  console.log(permit);
  permit
    .save()
    .then((result) => {
      res.render("permit", { user: req.user });
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
