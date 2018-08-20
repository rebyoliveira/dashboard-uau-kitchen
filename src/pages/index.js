import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header'
import Panel from '../components/Panel'
import Dashboard from '../components/Dashboard'


const Index = () => (
  <Container>
    <Col>
      <Row>
        <Dashboard />
      </Row>
    </Col>
  </Container>
)

export default Index;
