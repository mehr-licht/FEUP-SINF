import React from "react";
import { Checkbox } from 'antd';

const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()},
        ${date.getHours() < 10 ? "0" : ""}${date.getHours()}:${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
};

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

class MachipTableRow extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            expandedRows: []
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
    
    renderItem(item) {
        const clickCallback = () => this.handleRowClick(item.id);
        const itemRows = [
			<tr onClick={clickCallback} key={item.id}>
                <td>{item.seriesNumber}</td>
			    <td>{item.accountingPartyAddress}</td>
			    <td>{item.payableAmount.amount}</td>
			    <td>{item.documentStatus}</td>
			    <td>{formatTimestamp(item.documentDate)}</td>			
			</tr>
        ];

        if (this.state.expandedRows.includes(item.id)) {
    
            item.documentLines.forEach(item2 =>{
                if (item2.quantity - item2.invoicedQuantity > 0) {
                    itemRows.push(
                        <tr key={item2.id}>
                            <td></td>
                            <td></td>
                            <td>{item2.description}</td>
                            <td>{item2.quantity - item2.invoicedQuantity}</td>
                            <td><Checkbox onChange={onChange}></Checkbox></td>
                        </tr>
                    );
                    
                }
            })
        }
        
        return itemRows;    
    }
    render() {
        const { item } = this.props;
        let allItemRows = [];  
        const perItemRows = this.renderItem(item);
            return (
                allItemRows = allItemRows.concat(perItemRows)
            )
    }
}

export default MachipTableRow;
