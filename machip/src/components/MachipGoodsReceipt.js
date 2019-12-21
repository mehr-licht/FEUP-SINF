import React, { Component } from "react";
import { Table } from 'react-bootstrap'
// import MachipTableHeaders from "./MachipTableHeaders"
// import MachipTableRow from "./MachipTableRow"
import MyFetch from "./MyFetch";

const ReplaceTextFunction = (txt) => {
    txt = txt.toString().replace("_", " ");
    txt = txt.toLowerCase().split(' ');
    for (var i = 0; i < txt.length; i++) {
        txt[i] = txt[i].charAt(0).toUpperCase() + txt[i].substring(1);
    }
    return txt.join(' ');
}

class MachipGoodsReceipt extends Component {

    constructor(props) {
        super(props);

        this.state = {
            info: []
        }
    }

    componentDidMount() {
        MyFetch(`${this.props.endpoint}/${this.props.match.params.page}/${this.props.match.params.size}`,
            (info) => {
                this.setState({ info });
            },
            (err) => {
                console.log("Erro: " + err);
            });
    }

    render() {
        const { info } = this.state;
        const { endpoint } = this.props;
        // const tableHeaders = MachipTableHeaders[`${endpoint}`];
        return (
            <div>
                <h2> {ReplaceTextFunction(`${endpoint}`)}</h2>
                <Table striped bordered hover responsive="sm" >
                    <tbody>
                        {Object.entries(info).map(([key, value]) =>
                        
                            // key !== "isDeleted" ? (<tr key={key}></tr   >) :
                                (
                            // {console.log(typeof value)}//documentLines
                            <tr key={key}>
                                <td>{key}</td>
                                {/* <td>{value}</td> */}
                            </tr>
                        )
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default MachipGoodsReceipt;