import React from "react";
import { Link } from "react-router-dom";

const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()},
        ${date.getHours() < 10 ? "0" : ""}${date.getHours()}:${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
};

class MachipTableRow extends React.Component{
    
    render() {
        const { request, item, i } = this.props;
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
                    <tr>                     
                        <td> <Link to={`/SalesOrders/${item.id}`}>{i + 1}</Link></td>
                        <td> {item.company}</td >
                        <td> {item.grossValue.amount}</td >
                        <td> {item.accountingParty}</td >
                    </tr>
                )
            default:
                break;
        }
    }
}

export default MachipTableRow;