const express = require("express"),
    /* bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    hbs = require("hbs"),
    path = require("path"), */
    cors = require("cors"),
    app = express();
//http = require("http"),
/* https = require("https"),
  fs = require("fs"),
  helmet = require("helmet"),
  session = require("express-session"),
  csrf = require("csurf"),
  uuid = require("uuid"),
  crypto = require("crypto"), */
//HTTP_port = process.env.PORT || 5000,
//HTTPS_port = process.env.PORT || 5001;
const logger = require("./logger");
const { STARTED_LISTENING } = require("./logger-messages");
const routes = require("./routes");
const axios = require("axios");
const qs = require("qs");
const company = "FEUP-AI";
var token = "";

app.use(cors());

const PORT = 3001;

app.listen(PORT, () => {
    app.emit("app_started");
    logger.info(STARTED_LISTENING(PORT));
});

app.get("/token", async (req, res) => {
    let data = qs.stringify({
        client_id: "FEUP-SINF-AI-01",
        client_secret: "7aebec1d-e524-470d-9782-395bffa87ef1",
        scope: "application",
        grant_type: "client_credentials"
    });
    axios
        .post("https://identity.primaverabss.com/connect/token", data)
        .then(response => {
            console.log("Response", response.data);
            this.token = response.data.token_type + " " + response.data.access_token;
            return res.send(response.data);
        })
        .catch(error => {
            console.log("Error", error);
            return res.send({ message: error });
        });
});

app.get("/goods_receipt", async (req, res) => {
    let data = qs.stringify({
        SourceDocKey: "ECF.2019.7",
        SourceDocLineNumber: 1,
        quantity: 5
    });
    axios
        .post(`https://my.jasminsoftware.com/api/224895/224895-0001/goodsreceipt/processOrders/FEUP-AI`, data, { headers: { Authorization: this.token }})
        .then(response => {
            console.log("Response", response.data);
            return res.send(response.data);
        })
        .catch(error => {
            console.log("Error", error);
            return res.send({ message: error });
        });
});


app.get("/sales_orders/:id", async (req, res) => {
    axios
        .get("https://my.jasminsoftware.com/api/224895/224895-0001/sales/orders/" + req.params.id, { headers: { Authorization: this.token } })
        .then(response => {
            console.log("Response", response.data);
            return res.send(response.data);
        })
        .catch(error => {
            console.log("Error", error);
            return res.send({ message: error });
        });
});

app.get("/sales_orders", async (req, res) => {
    axios
        .get("https://my.jasminsoftware.com/api/224895/224895-0001/sales/orders", { headers: { Authorization: this.token } })
        .then(response => {
            console.log("Response", response.data);
            return res.send(response.data);
        })
        .catch(error => {
            console.log("Error", error);
            return res.send({ message: error });
        });
});

app.get("/purchase_orders", async (req, res) => {
    axios
        .get("https://my.jasminsoftware.com/api/224895/224895-0001/purchases/orders", { headers: { Authorization: this.token } })
        .then(response => {
            console.log("Response", response.data);
            return res.send(response.data);
        })
        .catch(error => {
            console.log("Error", error);
            return res.send({ message: error });
        });
});

app.get("/purchase_orders/:id", async (req, res) => {
    axios
        .get("https://my.jasminsoftware.com/api/224895/224895-0001/purchases/orders/" + req.params.id, { headers: { Authorization: this.token } })
        .then(response => {
            console.log("Response", response.data);
            return res.send(response.data);
        })
        .catch(error => {
            console.log("Error", error);
            return res.send({ message: error });
        });
});
app.get("/warehouses", async (req, res) => {
    axios
        .get("https://my.jasminsoftware.com/api/224895/224895-0001/materialscore/warehouses", { headers: { Authorization: this.token } })
        .then(response => {
            console.log("Response", response.data);
            return res.send(response.data);
        })
        .catch(error => {
            console.log("Error", error);
            return res.send({ message: error });
        });
});

app.get("/warehouse_items", async (req, res) => {
    axios
        .get("https://my.jasminsoftware.com/api/224895/224895-0001/materialscore/materialsitems", { headers: { Authorization: this.token } })
        .then(response => {
            console.log("Response", response.data);
            return res.send(response.data);
        })
        .catch(error => {
            console.log("Error", error);
            return res.send({ message: error });
        });
});


app.get("/delivery_terms/:id", async (req, res) => {
    axios
        .get("https://my.jasminsoftware.com/api/224895/224895-0001/logisticscore/deliveryTerms/" + req.params.id, { headers: { Authorization: this.token } })
        .then(response => {
            console.log("Response", response.data);
            return res.send(response.data);
        })
        .catch(error => {
            console.log("Error", error);
            return res.send({ message: error });
        });
});

app.get("/delivery_terms", async (req, res) => {
    axios
        .get("https://my.jasminsoftware.com/api/224895/224895-0001/logisticscore/deliveryTerms", { headers: { Authorization: this.token } })
        .then(response => {
            console.log("Response", response.data);
            return res.send(response.data);
        })
        .catch(error => {
            console.log("Error", error);
            return res.send({ message: error });
        });
});

app.get("/item_description/:id", async (req, res) => {
    axios
        .get("https://my.jasminsoftware.com/api/224895/224895-0001/materialscore/materialsitems/" + req.params.id + "/extension", { headers: { Authorization: this.token } })
        .then(response => {
            console.log("Response", response.data);
            return res.send(response.data);
        })
        .catch(error => {
            console.log("Error", error);
            return res.send({ message: error });
        });
});

app.get("/from_to/:from/:to/:salesItem/:qty", async (req, res) => {
    axios
        .post("https://my.jasminsoftware.com/api/224895/224895-0001/materialsmanagement/stockTransferOrders", {
            headers: { Authorization: this.token },
            body: {
                "company": "FEUP-AI",
                "sourceWarehouse": req.params.from,
                "targetWarehouse": req.params.to,
                "UnloadingCountry": "PT",
                "loadingBuildingNumber": "01",
                "documentLines": [
                    {
                        "materialsItem": req.params.salesItem,
                        "quantity": req.params.qty,
                    }
                ]
            }
        })
        .then(response => {
            console.log("Response", response.data);
            return res.send(response.data);
        })
        .catch(error => {
            console.log("Error", error);
            return res.send({ message: error });
        });
});

// body:[
//     {
//         "quantity": 1,
//         "sourceDocKey": "ECL.2017.7",
//         "sourceDocLineNumber": 1
//     },
//     {
//         "quantity": 1,
//         "sourceDocKey": "ECL.2017.7",
//         "sourceDocLineNumber": 2
//     }
// ]
app.get("/generate_delivery", async (req, res) => { //TODO Falta o body
    axios
        .post("https://my.jasminsoftware.com/api/224895/224895-0001/shipping/processOrders/FEUP-AI", {
            headers: { Authorization: this.token },
        })
        .then(response => {
            console.log("Response", response.data);
            return res.send(response.data);
        })
        .catch(error => {
            console.log("Error", error);
            return res.send({ message: error });
        });
});

app.get("/goods_receipt/:page/:size", async (req, res) => {
    console.log(req.params);
    axios
        .get("https://my.jasminsoftware.com/api/224895/224895-0001/shipping/processOrders/" + req.params.page + "/"+req.params.size+"?company="+company, { headers: { Authorization: this.token } })
        .then(response => {
            console.log("Response", response.data);
            return res.send(response.data);
        })
        .catch(error => {
            console.log("Error", error);
            return res.send({ message: error });
        });
});
