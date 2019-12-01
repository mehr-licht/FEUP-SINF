import React, { Component } from "react";
import { Table } from 'react-bootstrap'
import MachipTableHeaders from "./MachipTableHeaders"
import MachipTableRow from "./MachipTableRow"
import MyFetch from "./MyFetch";

const ReplaceTextFunction = (txt) => {
    txt = txt.toString().replace("_", " ");
    txt = txt.toLowerCase().split(' ');
    for (var i = 0; i < txt.length; i++) {
        txt[i] = txt[i].charAt(0).toUpperCase() + txt[i].substring(1);
    }
    return txt.join(' '); 
}

class MachipTable extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            info: []
        }
    }

    componentDidMount() {
        MyFetch(`${this.props.endpoint}`,
            (info) => {
                this.setState({ info });
            },
            (err) => {
                console.log("Erro: "+ err);
        });
    }

    render() {
        const { info } = this.state;
        const { endpoint } = this.props;
        const  tableHeaders  = MachipTableHeaders[`${endpoint}`];
       
        console.log(info);
        return (
            <div>
                <h2> {ReplaceTextFunction(`${ endpoint }`)}</h2>
                
                <Table striped bordered hover responsive="sm" >
                    <thead>
                        <tr>
                            {tableHeaders.map((header) =>    
                                <th key={header}>{header}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {info.map((item, i) =>
                            <MachipTableRow key={i} request={endpoint} item={item} i={i} />
                        )}
                    </tbody>
                </Table>                
            </div>
        );
    }
}

export default MachipTable;