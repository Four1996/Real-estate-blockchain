import React, { Component } from 'react';
import NavFrame from './components/NavFrame';

import {
  Container,
  Row,
  Col,
  Jumbotron,
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <NavFrame></NavFrame>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h2>Welcome to Real Estate Digital Currency Trading Platform Demo</h2>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
