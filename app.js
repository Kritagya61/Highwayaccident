const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const permitRoutes = require("./routes/permit-routes");
const passportSetup = require("./config/passport-setup");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const app = express();

// set view engine
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set up session cookies

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
// mongoose.connect(keys.mongodb.dbURI, () => {
//     console.log('connected to mongodb');
// });

// const db = require("./config/keys").mongoURI;

//connect to Mongo
mongoose
  .connect(keys.mongodb.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    // autoIndex: true,
  })
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log(err);
  });

// create home route
app.get("/", (req, res) => {
  res.render("home", { user: req.user });
});

// set up routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/permit", permitRoutes);

app.listen(3004, () => {
  console.log("app now listening for requests on port 3004");
});
