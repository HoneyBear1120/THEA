import React, { Component } from 'react';
import Layout from './Components/layout';

class Dashboard extends Component {

    render() {
        const propsForNavBar =   this.props.location?.preventCollectionReloading;
        return (
            <Layout header={true} navbar={true} sidebar={true} propsForNavBar={propsForNavBar} isDashboard={true}></Layout>
        )
    }

}

export default Dashboard