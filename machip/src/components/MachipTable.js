import React, { Component } from "react";
import { Table } from "react-bootstrap";
import MachipTableHeaders from "./MachipTableHeaders";
import MachipTableRow from "./MachipTableRow";
import { purchaseApiRequest } from "../api/purchaseApiRequest";

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
      info: []
    };
  }

  componentDidMount() {
    console.log("Component Did Mount");
    purchaseApiRequest()
      .then(data => {
        this.setState({ info: data });
      })
      .catch(() => {
        this.setState({ info: [] });
      });
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
    var info_final = removeDup(info);
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
      </div>
    );
  }
}

export default MachipTable;
