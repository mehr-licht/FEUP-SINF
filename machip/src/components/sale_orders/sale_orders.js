import React, { Component } from "react";
import "./sale_orders.css";
import ReactTable from "react-table"
import "react-table/react-table.css"

class SalesOrders extends Component {
    
    constructor(){
        super();
        this.state = {
            sales_orders: []
        }
        fetch('/token')
    }

    componentDidMount() {
        fetch('/sales_orders')
        .then(res => res.json())
        .then(sales_orders => this.setState({sales_orders}))
    }
    
    render(){
        const columns = [
            {
                Header: "#",
                accessor: "seriesNumber"
            },
            {
                Header: "Gross Value",
                accessor: "grossValue.amount"
            },
            {
                Header: "Customer",
                accessor: "buyerCustomerPartyName"
            },
            {
                Header: "Date",
                accessor: "documentDate"
            }
        ]
        return (
            <div className="back">
                <div>
                    <h1>
                        Sales Orders
                    </h1>
                    <ReactTable
                        columns={columns}
                        data = {this.state.sales_orders}
                        defaultPageSize = {10}
                        showPageSizeOptions = {false}
                        style = {
                            {
                                backgroundColor: "#1F2833",
                                color: "white",
                                textAlign: "center"
                            }
                        }
                        getTrProps={(state, rowInfo, column, instance) => ({
                          onClick: e => console.log(rowInfo.original.documentLines)
                        })}
                    >

                    </ReactTable>
                </div>
            </div>
        );
    }
}

export default SalesOrders;