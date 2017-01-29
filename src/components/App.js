import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Grid, Row, Col } from 'react-bootstrap';

let config = require('../../react-auth-server/config.json');

class AppComponent extends Component {
    componentWillMount() {
        this.lock = new Auth0Lock(config.YOUR_AUTH0_CLIENT_ID, config.YOUR_AUTH0_DOMAIN);
    }

    render() {
        return (
            <div>
                <Header lock={this.lock} />
                <Grid>
                    <Row>
                        <Col xs={12} md={3}>
                            <Sidebar/>
                        </Col>
                        <Col xs={12} md={9}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    };
}

export default AppComponent;
