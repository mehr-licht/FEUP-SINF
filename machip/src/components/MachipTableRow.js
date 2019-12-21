import React from "react";
import { Checkbox } from 'antd';

const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()},
        ${date.getHours() < 10 ? "0" : ""}${date.getHours()}:${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
};

const pickedItems = []

class MachipTableRow extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            expandedRows: []
        }
    }

    
    onChange(e) {
        if (e.target.endpoint === "purchase_orders") {
            if (e.target.checked) {
                pickedItems.push([e.target.value,e.target.value2]);
            }
            else{
                const removeIndex = pickedItems.map(function(elem) {
                    return elem;
                }).indexOf(e.target.value);
                pickedItems.splice(removeIndex, 1);
            }           
        }
        else if (e.target.endpoint === "sales_orders") {
            if (e.target.checked) {
                pickedItems.push(e.target.value);
            }
            else{
                const removeIndex = pickedItems.map(function(elem) {
                    return elem;
                }).indexOf(e.target.value);
                pickedItems.splice(removeIndex, 1);
            }
        }
        else if (e.target.endpoint === "outward") {
            if (e.target.checked) {
                pickedItems.push(e.target.value);
            }
            else{
                const removeIndex = pickedItems.map(function(elem) {
                    return elem;
                }).indexOf(e.target.value);
                pickedItems.splice(removeIndex, 1);
            }
        }
    }


    handleRowClick(rowId) {
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);
        
        const newExpandedRows = isRowCurrentlyExpanded ? 
			currentExpandedRows.filter(id => id !== rowId) : 
			currentExpandedRows.concat(rowId);
    
        this.setState({expandedRows : newExpandedRows});
    }
    
    renderItem(item, endpoint) {
        const clickCallback = () => this.handleRowClick(item.id);
        let itemRows = []
        
        if (endpoint === "sales_orders") {
            itemRows = [
                <tr onClick={clickCallback} key={item.id}>
                    <td>{item.seriesNumber}</td>
                    <td>{item.accountingPartyAddress}</td>
                    <td>{item.payableAmount.amount}</td>
                    <td>{formatTimestamp(item.documentDate)}</td>		
                    <td><Checkbox value={item} endpoint={endpoint} onChange={this.onChange}></Checkbox></td>	
                </tr>
            ];
        }

        if (endpoint === "purchase_orders") {
            itemRows = [
                <tr onClick={clickCallback} key={item.id}>
                    <td>{item.seriesNumber}</td>
                    <td>{item.accountingPartyAddress}</td>
                    <td>{item.payableAmount.amount}</td>
                    <td>{formatTimestamp(item.documentDate)}</td>	
                </tr>
            ];

            if (this.state.expandedRows.includes(item.id)) {
            item.documentLines.forEach(item2 =>{
                    if (item2.quantity - item2.receivedQuantity > 0) {
                        itemRows.push(
                            <tr key={item2.id}>
                                <td></td>
                                <td></td>
                                <td>{item2.description}</td>
                                <td>{item2.quantity - item2.receivedQuantity}</td>
                                <td><Checkbox value2={item} endpoint={endpoint} value={item2} onChange={this.onChange}></Checkbox></td>
                            </tr>
                        );
                        
                    }
                    
                })
            }
        }
        
        return itemRows;    
    }

    render() {
        const { item } = this.props;
        const { endpoint } = this.props;
        if (endpoint === "inward") {
            const itemRows = [];
            itemRows.push(
                <tr key={item[0]}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                            
                </tr>
            );
            return(itemRows);
        }
        else if (endpoint === "outward") {
            const itemRows = [];
            itemRows.push(
                <tr key={item[3]}>
                    <td>{item[3]}</td>
                    <td>{item[0]}</td>
                    <td><Checkbox value={item} endpoint={endpoint} onChange={this.onChange}></Checkbox></td>
                </tr>
            );
            return(itemRows);
        }
        else{
            let allItemRows = [];  
            const perItemRows = this.renderItem(item, endpoint);
            return (
                allItemRows = allItemRows.concat(perItemRows)
            )
        }
    }
}

export default MachipTableRow;
export {pickedItems};
