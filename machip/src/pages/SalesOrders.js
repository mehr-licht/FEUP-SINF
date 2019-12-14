import React from 'react';
import Layout from '../components/common/Layout'
import MachipTable from '../components/MachipTable'

const Dashboard = () => {

    return (
        <Layout>
            <MachipTable endpoint="sales_orders" />
        </Layout>
    );
}

export default Dashboard;