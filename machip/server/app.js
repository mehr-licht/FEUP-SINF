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
const itemDescriptionRouter = require("./routes/item_description");
const goodsReceiptRouter = require("./routes/goods_receipt");
const transferOrderRouter = require("./routes/transfer_order");
const shippingOrderRouter = require("./routes/shipping");
const salesOrdersRouter = require("./routes/sales_orders");

app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/", indexRouter);
app.use("/api/token", tokenRouter);
app.use("/api/delivery_terms", deliveryTermsRouter);
app.use("/api/purchase_orders", purchasesRouter);
app.use("/api/sales_orders", salesRouter);
app.use("/api/warehouse_items", warehouseItemsRouter);
app.use("/api/warehouses", warehousesRouter);
app.use("/api/item_description", itemDescriptionRouter);
app.use("/api/goods_receipt", goodsReceiptRouter);
app.use("/api/transfer_order", transferOrderRouter);
app.use("/api/sales_orders_picking", salesOrdersRouter);
app.use("/api/shipping", shippingOrderRouter);

const PORT = 3001;

db.sequelize
  .sync(/*{ force: true }*/)
  .then(() => {
    logger.info("Database connected...");
    app.listen(PORT, () => {
      app.emit("app_started");
      logger.info(STARTED_LISTENING(PORT));
    });
  })
  .catch(err => logger.error("Database error: " + err));
