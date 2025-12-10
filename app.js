const express = require("express");
const connectDB = require("./server/data/configDB");
const router = require("./server/routes/indexRouter");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 3000;
const localhost = "http://localhost:";

// register view engine && config Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "client/src/views"));
app.set("layout", "index");

// Middleware to serve static files
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "client/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// listen for requests
connectDB
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur ${localhost}${PORT}`);
      console.log(`📝 Accédez à l'app: ${localhost}${PORT}/api/v1/blogs`);
    });
  })
  .catch((err) => {
    console.error(`❌ Erreur MongoDB: ${err}`);
    process.exit(1);
  });

// Use index router for handling routes
app.use("/api/v1", router);

// 404 page
app.use((req, res) => {
  res
    .status(404)
    .render("404", { url: req.originalUrl, title: "PageNotFound-404" });
});
