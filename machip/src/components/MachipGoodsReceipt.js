// import React, { Component } from "react";
// import { Table } from 'react-bootstrap'
// import MachipTableHeaders from "./MachipTableHeaders"
// // import MachipTableRow from "./MachipTableRow"
// import MyFetch from "./MyFetch";

// const ReplaceTextFunction = (txt) => {
//     txt = txt.toString().replace("_", " ");
//     txt = txt.toLowerCase().split(' ');
//     for (var i = 0; i < txt.length; i++) {
//         txt[i] = txt[i].charAt(0).toUpperCase() + txt[i].substring(1);
//     }
//     return txt.join(' ');
// }

// class MachipGoodsReceipt extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             info: []
//         }
//     }

//     handleRowClick(rowId) {
//         console.log(rowId);
//         const currentExpandedRows = this.state.expandedRows;
//         const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

//         const newExpandedRows = isRowCurrentlyExpanded ?
//             currentExpandedRows.filter(id => id !== rowId) :
//             currentExpandedRows.concat(rowId);

//         this.setState({ expandedRows: newExpandedRows });
//     }

//     componentDidMount() {
//         console.log(this.props.match.params);
//         console.log(`${this.props.endpoint}/${this.props.match.params.id}`);
//         MyFetch(`${this.props.endpoint}/${this.props.match.params.page}/${this.props.match.params.size}`,
//             (info) => {
//                 console.log("INFO PLEASE", info);
//                 this.setState({ info });
//             },
//             (err) => {
//                 console.log("Erro: " + err);
//             });
//     }

//     render() {
//         const { info } = this.state;
//         const { endpoint } = this.props;
//         console.log();
//         const tableHeaders = MachipTableHeaders[`${endpoint}`];
//         const clickCallback = (key) => this.handleRowClick(key);
//         return (
//             <div>
//                 <h2> {ReplaceTextFunction(`${endpoint}`)}</h2>
//                 <Table striped bordered hover responsive="sm" >
//                     <thead>
//                         <tr>
//                             {tableHeaders.map((header) =>
//                                 <th key={header}>{header}</th>
//                             )}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Object.entries(info).map(([key, value]) => (
//                             // <tr onClick={clickCallback(key)} key={key}>
//                             <tr key={key}>
//                                 <td>{key}</td>
//                                 <td>{value.party}</td> 
//                                 <td>{value.description}</td> 
//                                 <td>{value.quantity}</td> 
//                                 <td>{value.originalQuantity}</td> 
//                                 <td>{value.openQuantity}</td> 
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//             </div>
//         );
//     }
// }

// export default MachipGoodsReceipt;