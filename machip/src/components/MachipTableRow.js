import React from "react";
import { Checkbox } from 'antd';
import MyFetch from "./MyFetch";
import parseItems from "../utils/parseItems";
const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()},
        ${date.getHours() < 10 ? "0" : ""}${date.getHours()}:${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
};


class MachipTableRow extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            expandedRows: [],
            info_final: [],
        }
    }

    
    onChange = (e) => { //[TODO] é preciso qty clickada
        if (e.target.checked) {
            this.props.getPick(e.target.value, "add");
        }
        else{
            this.props.getPick(e.target.value, "remove");
        };
    }


    handleRowClick(rowId) {
        console.log(rowId);
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);
        
        const newExpandedRows = isRowCurrentlyExpanded ? 
			currentExpandedRows.filter(id => id !== rowId) : 
			currentExpandedRows.concat(rowId);
        
        this.setState({expandedRows : newExpandedRows});
    }

    handleWarehouseRowClick(warehouseId) {
        console.log("clickou em " + warehouseId);
        MyFetch("warehouse_items",
            (info) => {
                this.setState({ info_final: parseItems(info, warehouseId) });
            },
            (err) => {
                console.log("Erro: " + err);
            });
        
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(warehouseId);

         const newExpandedRows = isRowCurrentlyExpanded ?
             currentExpandedRows.filter(id => id !== warehouseId) :  //ISN'T REMOVING
             currentExpandedRows.concat(warehouseId);
        this.setState({ expandedRows: newExpandedRows });
    }

    
    renderItem(item, endpoint) {
        const clickCallback = () => this.handleRowClick(item.id);
        const clickCallbackWarehouse = () => this.handleWarehouseRowClick(item.warehouseKey);
        const clickCallbackPicking = () => this.handleRowClick(item.seriesNumber);
        let itemRows = [];
        switch (endpoint) {
            case "purchase_orders":
                itemRows = [
                    <tr onClick={clickCallback} key={item.id}>
                        <td>{item.seriesNumber}</td>
                        <td>{item.accountingPartyAddress}</td>
                        <td>{item.payableAmount.amount}</td>
                        <td>{item.documentStatus}</td>
                        <td>{formatTimestamp(item.documentDate)}</td>
                    </tr>
                ];
                break;
            
            case "sales_orders":
                if (this.props.isPicking) {// && aindaNaoMovidoNaTotalidade [TODO]
                    itemRows = [
                        <tr onClick={clickCallbackPicking} key={item.id}>
                            <td>{item.seriesNumber}</td>
                            <td>{item.accountingPartyAddress}</td>
                            <td>{item.payableAmount.amount}</td>
                            <td>{item.documentStatus}</td>
                            <td>{formatTimestamp(item.documentDate)}</td>
                        </tr>
                    ];
                } else {
                    itemRows = [
                        <tr key={item.id}>
                            <td>{item.seriesNumber}</td>
                            <td>{item.accountingPartyAddress}</td>
                            <td>{item.payableAmount.amount}</td>
                            <td>{item.documentStatus}</td>
                            <td>{formatTimestamp(item.documentDate)}</td>
                            <td><Checkbox value={item.id} onChange={this.onChange}></Checkbox></td> {/*[TODO] é preciso qty clickada*/}
                        </tr>
                    ];
                }
                break;
            case "warehouses":
                if (item.warehouseKey === "01" || item.warehouseKey === "02") {
                    itemRows = [
                        <tr onClick={clickCallbackWarehouse} key={item.id}>
                            <td>{item.warehouseKey}</td>
                            <td>{item.description}</td>
                        </tr>
                    ];
                }
                break;
            case "warehouse_items":
                itemRows = [
                    <tr key={item.itemId}>
                        <td>{item.itemDescription}</td>
                        <td>{item.stock}</td>
                    </tr>
                ];
                break;
            default:
                break;    
        } 
        if (endpoint === "warehouses") {
            itemRows.push(
                this.state.info_final.map((inventario, i) =>
                    <tr key={i}>
                        <td>{inventario.itemDescription}</td>
                        <td>{inventario.stock}</td>
                        <td><Checkbox></Checkbox></td>
                    </tr>
                ))
        } else if (this.props.isPicking) {
            if (this.state.expandedRows.includes(item.seriesNumber) ) {
                item.documentLines.forEach(item2 => {
                    console.log(item2);
                    //if (item2.quantity - item2.receivedQuantity > 0) {
 //[TODO] é preciso qty
                        itemRows.push(
                            <tr key={item2.id}>
                                <td></td>
                                <td></td>
                                <td>{item2.description}</td>
                                {/* <td>{item2.quantity - item2.receivedQuantity}</td> */}
                                <td>{item2.quantity}</td>
                                <td></td>
                                <td><Checkbox qty={item2.quantity} value={item2} onChange={this.onChange}></Checkbox></td> {/*[TODO] é preciso qty clickada*/}
                            </tr>
                        );

                   // }
                })
            }
        }else { 
            if (this.state.expandedRows.includes(item.id)) {
            item.documentLines.forEach(item2 => {
                if (item2.quantity - item2.receivedQuantity > 0) {
                    itemRows.push(
                        <tr key={item2.id}>
                            <td></td>
                            <td></td>
                            <td>{item2.description}</td>
                            <td>{item2.quantity - item2.receivedQuantity}</td>
                            <td><Checkbox value2={item} value={item2} onChange={this.onChange}></Checkbox></td>
                        </tr>
                    );
                    
                }
            })
        }
    }
        return itemRows;    
    }

    render() {
        const { item, endpoint } = this.props;
        let allItemRows = [];  
        const perItemRows = this.renderItem(item, endpoint);
            return (
                allItemRows = allItemRows.concat(perItemRows)
            )
    }
}

export default MachipTableRow;
