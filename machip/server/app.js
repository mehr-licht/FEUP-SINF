const express = require("express");
const cors = require("cors");
const db = require("./models/index");
const logger = require("./utils/logger");
const { STARTED_LISTENING } = require("./utils/logger-messages");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const tokenRouter = require("./routes/token");
const salesRouter = require("./routes/sales");
const purchasesRouter = require("./routes/purchases");
const warehousesRouter = require("./routes/warehouses");
const warehouseItemsRouter = require("./routes/warehouseItems");
const deliveryTermsRouter = require("./routes/deliveryTerms");

app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(cors());

app.use("/api/", indexRouter);
app.use("/api/token", tokenRouter);
app.use("/api/delivery_terms", deliveryTermsRouter);
app.use("/api/purchase_orders", purchasesRouter);
app.use("/api/sales_order", salesRouter);
app.use("/api/warehouse_items", warehouseItemsRouter);
app.use("/api/warehouses", warehousesRouter);

const PORT = 3001;

db.sequelize
  .sync({ force: true })
  .then(() => {
    logger.info("Database connected...");
    app.listen(PORT, () => {
      app.emit("app_started");
      logger.info(STARTED_LISTENING(PORT));
    });
  })
  .catch(err => logger.error("Database error: " + err));
