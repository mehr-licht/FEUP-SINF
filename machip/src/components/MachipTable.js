import React, { Component } from "react";
import { Table, Button  } from "react-bootstrap";
import MachipTableHeaders from "./MachipTableHeaders";
import MachipTableRow from "./MachipTableRow";
import { purchaseApiRequest } from "../api/purchaseApiRequest";
import { salesApiRequest } from "../api/salesApiRequest";
import {pickedItems} from "./MachipTableRow";
import { goodsApiRequest } from "../api/goodsApiRequest";

const ReplaceTextFunction = txt => {
  txt = txt.toString().replace("_", " ");
  txt = txt.toLowerCase().split(" ");
  for (var i = 0; i < txt.length; i++) {
    txt[i] = txt[i].charAt(0).toUpperCase() + txt[i].substring(1);
  }
  return txt.join(" ");
};


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function removeDup(info, endpoint) {
  var seriesNumbers = [];
  var final_info = [];
  var aux = 0;
  if (endpoint === "purchase_orders") {
    if (info.length) {
      info.forEach(element => {
        if (!seriesNumbers.includes(element.seriesNumber)) {
          if (element.documentStatus === 1 && element.isDeleted === false) {
            for (let i = 0; i < element.documentLines.length; i++) {
              if (element.documentLines[i].quantity === element.documentLines[i].receivedQuantity) {
                aux += 1;
              }
            }
            if (aux !== element.documentLines.length) {
              seriesNumbers.push(element.seriesNumber);
              final_info.push(element);
            }
          }
        }
        aux = 0;
      });
    } else {
      console.log("no items found");
    }    
  }
  else{
    if (info.length) {
      info.forEach(element => {
        if (!seriesNumbers.includes(element.seriesNumber)) {
          seriesNumbers.push(element.seriesNumber);
          final_info.push(element);
        }
        aux = 0;
      });
    } else {
      console.log("no items found");
    }    
  }
  return final_info;
}


class MachipTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: []
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
    sleep(3000).then(() => {
      window.location.reload();
    })
  }

  componentDidMount() {
    if (this.props.endpoint === "purchase_orders") {
      console.log("Component Did Mount");
      purchaseApiRequest()
        .then(data => {
          this.setState({ info: data });
        })
        .catch(() => {
          this.setState({ info: [] });
        });      
    }
    else {
      console.log("Component Did Mount Sales");
      salesApiRequest()
        .then(data => {
          this.setState({ info: data });
        })
        .catch(() => {
          this.setState({ info: [] });
        });   
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

  render() {
    const { info } = this.state;
    const { endpoint } = this.props;
    const tableHeaders = MachipTableHeaders[`${endpoint}`];
    console.log("Info", info);
    var info_final = removeDup(info, this.props.endpoint);
    info_final.sort((a, b) => a.seriesNumber - b.seriesNumber);
    console.log(info_final);
    return (
      <div>
        <h2> {ReplaceTextFunction(`${endpoint}`)}</h2>

        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              {tableHeaders.map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {info_final.map((item, i) => (
              <MachipTableRow key={i} item={item} />
            ))}
          </tbody>
        </Table>
        <Button onClick={this.onChange}>
          Send Products
        </Button >
      </div>
    );
  }
}

export default MachipTable;
