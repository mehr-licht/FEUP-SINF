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

class MachipCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            info: []
        }
    }

    componentDidMount() {
        console.log(`${this.props.endpoint}/${this.props.match.params.id}`);
        MyFetch(`${this.props.endpoint}/${ this.props.match.params.id }`,
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
        console.log(info);
       // const tableHeaders = MachipTableHeaders[`${endpoint}`];
        return (
            <div>
                <h2> {ReplaceTextFunction(`${endpoint}`)}</h2>
                <Table striped bordered hover responsive="sm" >
                    <tbody>
                        {Object.entries(info).map(([key, value]) =>
                        <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                        </tr>)}
                    </tbody>
                </Table>                  
            </div>
        );
    }
}

export default MachipCard;