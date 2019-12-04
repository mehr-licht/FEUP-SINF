import React from "react";
import { Link } from "react-router-dom";

const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()},
        ${date.getHours() < 10 ? "0" : ""}${date.getHours()}:${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
};



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
			    <td>{item.grossValue.amount}</td>
			    <td>{item.documentDate}</td>			
			</tr>
        ];
        
        if(this.state.expandedRows.includes(item.id)) {
            item.documentLines.forEach(item2 =>{
                itemRows.push(
                    <tr key = {item2.id}>
                        <td>{item2.description}</td>
                        <td>{item2.quantity}</td>
                    </tr>
                );
            })
        }
        
        return itemRows;    
    }
    render() {
        const { request, item, i } = this.props;
        let allItemRows = [];  
        const perItemRows = this.renderItem(item);
        switch (request) {
            case 'delivery_terms':
                return (
                    <tr>
                        {/* //createdBy: "<Sys>"
                        // createdOn: "2019-08-01T11:07:31.1394609+00:00"
                       // deliveryitemKey: "N-VIATURA"
                    //description: "Nossa viatura"
                        //id: "c952d8a1-9857-4613-8523-ab30fafaabf1"
                      //  isActive: true
                    //isDeleted: false
                        //modifiedBy: "<Sys>"
                        //modifiedOn: "2019-08-01T11:07:31.1394609+00:00" */}
                        {/* <td>{item.id}</td> */}
                        <td> {i + 1}</td >
                        <td>{item.isActive && !item.isDeleted ? "ok" : "x"}</td>
                        <td> <Link to={`/DeliveryTerms/${item.id}`}>{item.description}</Link></td>
                        <td>{formatTimestamp(item.createdOn)}</td>
                        <td>{item.createdBy}</td>
                        <td>{item.modifiedOn !== item.createdOn ? "modified on"`${formatTimestamp(item.modifiedOn)}` : ""}</td>
                        <td>{item.modifiedBy !== item.createdBy ? "modified by"`${item.modifiedBy}` : ""}</td>
                    </tr>
                )
            case 'sales_orders':
                return (
                    allItemRows = allItemRows.concat(perItemRows)
                )
            case 'purchase_orders':
                console.log(item)                      
                return (
                    allItemRows = allItemRows.concat(perItemRows)
                )
            default:
                break;
        }
    }
}

export default MachipTableRow;
