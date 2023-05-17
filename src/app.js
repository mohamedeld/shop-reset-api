// Built in pakages
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
// Start app routes
const userRoutes = require("./interfaces/routes/user.routes");
const productRoutes = require("./interfaces/routes/product.routes");
const categoryRoutes = require("./interfaces/routes/category.routes");
const subcategoryRoutes = require("./interfaces/routes/subcategory.routes");
const notFoundRoute = require("./interfaces/middlewares/not-found.mw");
const errorRoute = require("./interfaces/middlewares/error.mw");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(userRoutes);
app.use(categoryRoutes);
app.use(subcategoryRoutes);
app.use(productRoutes);
app.use(notFoundRoute);
app.use(errorRoute);
module.exports = app;
