import React, { Component } from "react";
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Table } from "reactstrap";
import MachipTableHeaders from "./MachipTableHeaders";
import MachipTableRow from "./MachipTableRow";
import { purchaseApiRequest } from "../api/purchaseApiRequest";
import { salesApiRequest } from "../api/salesApiRequest";
import {pickedItems} from "./MachipTableRow";
import { goodsApiRequest } from "../api/goodsApiRequest";
import { itemDescriptionApiRequest } from "../api/itemDescriptionApiRequest";
import { transferOrdersApiRequest } from "../api/transferOrdersApiRequest";
import { getPickingApiRequest } from "../api/getPickingApiRequest";
import { postPickingApiRequest } from "../api/postPickingApiRequest";
import { shippingApiRequest } from "../api/shippingApiRequest";
import { transferOutOrdersApiRequest } from "../api/transferOutOrdersApiRequest";

const styles = theme => ({
  tableLabel: {
    paddingBottom: 5
  },
  tableHead: {
    color: theme.palette.green,
    backgroundColor: theme.palette.gray,
    fontWeight: 'bold',
    fontSize: '1.25em'
  },
  tableBody: {
    color: theme.palette.white,
    backgroundColor: theme.palette.gray
  },
  sendButton: {
    color: theme.palette.black,
    backgroundColor: theme.palette.neon_green,
    '&:hover': {
      backgroundColor: theme.palette.green,
      color: theme.palette.black
    }
  }
});

const ReplaceTextFunction = txt => {
  txt = txt.toString().replace("_", " ");
  txt = txt.toLowerCase().split(" ");
  for (var i = 0; i < txt.length; i++) {
    txt[i] = txt[i].charAt(0).toUpperCase() + txt[i].substring(1);
  }
  return txt.join(" ");
};

function onChange(endpoint, info) {
  if (endpoint === "purchase_orders") {
    console.log(endpoint)
    console.log(pickedItems);
    for (let i = 0; i < pickedItems.length; i++) {
      goodsApiRequest([pickedItems[i][0], pickedItems[i][1]])
        .then(data => {
          console.log(data);
        })
        .catch(() => {
          console.log("error");
        });   
    }
  }
  if (endpoint === "sales_orders") {
    console.log(endpoint)
    console.log(pickedItems);
    postPickingApiRequest(pickedItems)
      .then(data => {
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });   
      // goodsApiRequest([pickedItems[i][0], pickedItems[i][1]])
      //   .then(data => {
      //     console.log(data);
      //   })
      //   .catch(() => {
      //     console.log("error");
      //   });   
  }
  else if(endpoint === "inward"){
    console.log(info)
    for (let i = 0; i < info.length; i++) {
      transferOrdersApiRequest(info[i])
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log("error", error);
        });   
    }
  }
  else if(endpoint === "outward") {
    console.log(pickedItems)
    for (let i = 0; i < pickedItems.length; i++) {
      var aux = [pickedItems[i][0], pickedItems[i][1], pickedItems[i][5]]
      transferOutOrdersApiRequest(aux)
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log("error", error);
        });   
    }
    for (let i = 0; i < pickedItems.length; i++) {
      shippingApiRequest(pickedItems[i])
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log("error", error);
        });  
    } 
  }

  // sleep(3000).then(() => {
  //   window.location.reload();
  // })
}

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
  else if(endpoint === "sales_orders"){
    if (info.length) {
      info.forEach(element => {
        if (!seriesNumbers.includes(element.seriesNumber)) {
          if (element.documentStatus === 1 && element.isDeleted === false) {
            seriesNumbers.push(element.seriesNumber);
            final_info.push(element);
          }
        }
        aux = 0;
      });
    } else {
      console.log("no items found");
    }    
  }
  else {
    final_info = info;
  }
  return final_info;
}


function ButtonCustom(props) {
  const {endpoint} = props;
  const {classes} = props;
  const {info} = props;
  if (endpoint === "purchase_orders") {
    return (
      <Button className={classes.sendButton} variant="contained" onClick={() => onChange(endpoint, info)}>
        Process Products
      </Button >
      );
  }
  else if (endpoint === "sales_orders") {
    return (
      <Button onClick={() => onChange(endpoint, info)} className={classes.sendButton} variant="contained" >Process Orders</Button>
      );
  }
  else if (endpoint === "inward") {
    return (
      <Link to="/outward" className="btn btn-primary">Send Items</Link>
      );
  }
  else if (endpoint === "outward") {
    return (
      <Button onClick={() => onChange(endpoint, info)} className={classes.sendButton} variant="contained" >Process Orders</Button>
      );
  }
}


class MachipTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: []
    };
  }


  componentDidMount() {
    var tempInfo=[];
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
    else if(this.props.endpoint === "sales_orders") {
      console.log("Component Did Mount Sales");
      salesApiRequest()
        .then(data => {
          this.setState({ info: data });
        })
        .catch(() => {
          this.setState({ info: [] });
        });   
    }
    else if(this.props.endpoint === "inward") {
      itemDescriptionApiRequest()
      .then(data => {
        data.forEach(item => {
          item.materialsItemWarehouses.forEach(warehouses => {
            if (warehouses.warehouse === '01' && warehouses.stockBalance > 0) {
              item.materialsItemWarehouses.forEach(destination =>{
                if (destination.warehouse !== '01' && destination.warehouse !== '02') {
                  if (item.itemKey === "RYZEN93950X" && destination.warehouse === 'A00') {
                  }
                  else{
                    console.log(item.itemKey + ", " + warehouses.stockBalance + '-->' + destination.warehouse);
                    tempInfo.push([item.itemKey, warehouses.stockBalance, destination.warehouse])
                  }
                }
              })
            }
          });
        });
        this.setState({info: tempInfo});
      })
      .catch(error => {
        console.log("Error " + error)
      });   
    }
    else{
      getPickingApiRequest()
        .then(data => {
          console.log(data.sales_orders)
          data.sales_orders.forEach(element => {
            element.picking_list.forEach(element2 => {
              element2.documentLines.forEach(element3 => {
                if (element3.salesItem === "PORTES") {
                }
                else{
                  tempInfo.push([element3.salesItem, element3.quantity, element2.naturalKey, element3.index, element2.buyerCustomerPartyName]);
                }
              });
            });
          });
          this.setState({info: tempInfo});
        })
        .catch(error => {
          console.log("Error " + error);
        })

      itemDescriptionApiRequest()
        .then(data => {
          data.forEach(item => {
            item.materialsItemWarehouses.forEach(destination =>{
              if (destination.warehouse !== '01' && destination.warehouse !== '02') {
                console.log(item.itemKey + '-->' + destination.warehouse);
                if (tempInfo.some(row => row.includes(item.itemKey))) {
                  var index = tempInfo.map(function(elem) {
                    return elem[0];
                  }).indexOf(item.itemKey);
                  tempInfo[index].push(destination.warehouse)
                  console.log("ola")
                  //tempInfo.push([item.itemKey, destination.warehouse])           
                }
              }
            })
          });
          console.log(tempInfo)
        })
        .catch(error => {
          console.log("Error " + error)
        });   
    }
  }


  render() {
    const { classes } = this.props;
    const { info } = this.state;
    const { endpoint } = this.props;
    const tableHeaders = MachipTableHeaders[`${endpoint}`];
    console.log("Info", info);
    var info_final = removeDup(info, this.props.endpoint);
    info_final.sort((a, b) => a.seriesNumber - b.seriesNumber);
    console.log(info_final);
    return (
      <div>
        <h4 className={classes.tableLabel}> {ReplaceTextFunction(`${endpoint}`)}</h4>

        <Table dark striped bordered hover responsive="sm">
          <thead className={classes.tableHead}>
            <tr>
              {tableHeaders.map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className={classes.tableBody}>
            {this.props.overview ? 
              info_final.slice(0,5).map((item, i) => (
                <MachipTableRow key={i} item={item} endpoint={endpoint}/>
              ))
              : info_final.map((item, i) => (
                <MachipTableRow key={i} item={item} endpoint={endpoint}/>
              ))
            }
          </tbody>
        </Table>
        { this.props.overview ? 
          <></>
          : <ButtonCustom info={info} classes={classes} endpoint={endpoint}/>
        }
        
      </div>
    );
  }
}

MachipTable.propTypes = {
  classes: PropTypes.object.isRequired,
  overview: PropTypes.bool
};

export default withStyles(styles)(MachipTable);
