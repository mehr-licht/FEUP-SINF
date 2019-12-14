import React, { Component } from "react";
import { Table } from "react-bootstrap";
import MachipTableHeaders from "./MachipTableHeaders";
import MachipTableRow from "./MachipTableRow";
import { purchaseApiRequest } from "../api/purchaseApiRequest";
import { salesApiRequest } from "../api/salesApiRequest";
import { goodsApiRequest } from "../api/goodsApiRequest";
import MyFetch from "./MyFetch";
import { Button } from 'antd';
import parseItems from "../utils/parseItems";
import MyTransfer from "./MyTransfer";

const pickedItems = []

const ReplaceTextFunction = txt => {
  txt = txt.toString().replace("_", " ");
  txt = txt.toLowerCase().split(" ");
  for (var i = 0; i < txt.length; i++) {
    txt[i] = txt[i].charAt(0).toUpperCase() + txt[i].substring(1);
  }
  return txt.join(" ");
};

function removeDup(info) {
  var seriesNumbers = [];
  var final_info = [];
  if (info.length) {
    info.forEach(element => {
      if (!seriesNumbers.includes(element.seriesNumber)) {
        if (element.documentStatus === 1 && element.isDeleted === false) {
          seriesNumbers.push(element.seriesNumber);
          final_info.push(element);
        }
      }
    });
  } else {
    console.log("no items found");
  }
  return final_info;
}


class MachipTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: [],
      isPicking: false,
    }
  }
  

  componentDidMount() {
    console.log("Component Did Mount");
    if (!this.props.endpoint === "sales_picking_wave") {
      if (this.props.endpoint === "purchase_orders") {
        purchaseApiRequest()
          .then(data => {
            this.setState({ info: data });
          })
          .catch(() => {
            this.setState({ info: [] });
          });
      }
      else {
        salesApiRequest()
          .then(data => {
            this.setState({ info: data });
          })
          .catch(() => {
            this.setState({ info: [] });
          });
      }
    }
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component Update");
    if (this.state.info !== nextState.info) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("This state", this.state.info);
    console.log("Prev State", prevState.info);
  } */

  getPick(value, action) {
    //[TODO] é preciso qty clickada
    if (action === "add") {
      pickedItems.push(value);
    }
    else {
      const removeIndex = pickedItems.map(function (elem) {
        return elem.id;
      }).indexOf(value.id);
      pickedItems.splice(removeIndex, 1);
    };
  }


  onChange() {
    console.log(pickedItems);
    for (let index = 0; index < pickedItems.length; index++) {
      goodsApiRequest([pickedItems[index][0], pickedItems[index][1]])
        .then(data => {
          console.log(data);
        })
        .catch(() => {
          console.log("error");
        });
    }
  }

  submitPick = () => {
    if (this.props.endpoint === "purchase_orders") {
      this.onChange();
    } else {

      this.setState({ isPicking: true });
      console.log(pickedItems);
      if (!this.state.isPicking && this.props.endpoint !== "warehouses") {
        MyFetch("sales_orders",
          (info) => {
            console.log(info.filter((order) => pickedItems.includes(order.id)));
            this.setState({ info: info.filter((order) => pickedItems.includes(order.id)) });
            pickedItems.length = 0;
          },
          (err) => {
            console.log("Erro: " + err);
          });
      } else if (this.props.endpoint === "warehouses") {
        console.log("warehousing");
        //GERAR GUIA
      } else {
        const requestedQty = 1;//[TODO] recebe do click

        pickedItems.forEach((item) => {
          const qty = Math.min(requestedQty, item.quantity);
          //fazer qtyMovida = qty [TODO]
          console.log(item);
          MyTransfer(item, "sales", qty,
            (resp) => {
              console.log(resp);
            },
            (err) => {
              console.log("Erro: " + err);
            });
        });
        console.log(pickedItems);
        this.setState({ isPicking: false });
        this.setState({ warehousing: true });
      }
    }
  }


  render() {
    const { info } = this.state;
    const { endpoint, warehouse } = this.props;
    const tableHeaders = MachipTableHeaders[`${endpoint}`];
    console.log(info);
    console.log(endpoint);
    var info_final;
    if (endpoint === "warehouse_items") {
      info_final = parseItems(info, warehouse)
      console.log(info_final);
    } else if (endpoint !== "warehouses") {
      info_final = removeDup(info);
      info_final.sort((a, b) => a.seriesNumber - b.seriesNumber);
    } else {
      info_final = info;
    }

    console.log(info_final);
    return (
      <div>
        <h2> {this.state.isPicking ? "Picking Wave" : ReplaceTextFunction(`${endpoint}`)}</h2>

        <Table striped bordered hover responsive="sm" >
          <thead>
            <tr>
              {tableHeaders.map((header) =>
                <th key={header}>{header}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {info_final.map((item, i) =>
              <MachipTableRow key={i} item={item} endpoint={endpoint} getPick={this.getPick} isPicking={this.state.isPicking} />
            )}
          </tbody>
        </Table>
        < Button type="primary" onClick={this.submitPick}>Concluido</Button >
      </div>
    );
  }
}

export default MachipTable;