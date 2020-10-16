const router = require("express").Router();
const PermitModel = require("../models/permit-model");

router.get("/", (req, res) => {
  res.render("permit", { user: req.user });
});

router.get("/details", async (req, res) => {
  try {
    let shoplist = [];
    shoplist = await PermitModel.find();
    res.json(shoplist);
  } catch (error) {
    res.json({ error });
  }
});

router.post("/", (req, res) => {
  console.log(req.body);
  let permit = new PermitModel();
  permit.brandname = req.body.brandname;
  permit.shopname = req.body.shopname;
  permit.highwayname = req.body.highwayname;
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
