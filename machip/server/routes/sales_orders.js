var express = require("express");
var router = express.Router();
const { SalesOrders } = require("../models");

router.get("/", async (req, res) => {
  SalesOrders.findAll({
    attributes: ["id", "picking_list"]
  })
    .then(sales_orders => res.status(200).send({ sales_orders: sales_orders }))
    .catch(err => res.status(400).send({ error: err }));
});

router.get("/:id", async (req, res) => {
  SalesOrders.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(sales_order => {
      if (sales_order) {
        res.status(200).send({ sales_order: sales_order });
      } else {
        res.status(404).send({ error: "Sale order not found" });
      }
    })
    .catch(err => res.status(400).send({ error: err }));
});

router.delete("/:id", async (req, res) => {
  SalesOrders.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(sales_order => {
      if (sales_order === 1) {
        res.status(200).send({ message: "Sale order successfully deleted" });
      } else {
        res.status(404).send({ error: "Sale order not found" });
      }
    })
    .catch(err => res.status(400).send({ error: err }));
});

router.post("/", async (req, res) => {
  console.log(req.body)
  SalesOrders.create(req.body)
    .then(sales_orders => {
      res.status(201).send({ sales_orders });
    })
    .catch(err => {
      res.status(400).send({ error: err });
    });
});

module.exports = router;
