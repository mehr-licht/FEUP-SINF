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

function removeDup(info){
    var seriesNumbers = [];
    var final_info = [];
    info.forEach(element => {
        if(!seriesNumbers.includes(element.seriesNumber)){
            if(element.documentStatus == 2){
                seriesNumbers.push(element.seriesNumber);
                final_info.push(element);
            }
        }
    });
    return final_info
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
        var info_final = removeDup(info);
        console.log(info_final);
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
                        {info_final.map((item, i) =>
                            <MachipTableRow key={i} request={endpoint} item={item} i={i} />
                        )}
                    </tbody>
                </Table>                
            </div>
        );
    }
}

export default MachipTable;