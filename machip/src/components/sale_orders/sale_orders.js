import React, { Component } from "react";
import "./sale_orders.css";

class SalesOrders extends Component {
    
    constructor(){
        super();
        this.state = {
            sales_orders: []
        }
    }

    componentDidMount() {
        fetch('/token')
        fetch('/sales_orders')
        .then(res => res.json())
        .then(sales_orders => this.setState({sales_orders}))
    }
    
    render(){
        return (
            <div>
                <h2>Sales Orders:</h2>
                <ul>
                    {
                        this.state.sales_orders.map((sale_order) => 
                            <li key={sale_order.id}>company: { sale_order.company } Gross Value: { sale_order.grossValue.amount } Custome: { sale_order.buyerCustomerParty } </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default SalesOrders;
