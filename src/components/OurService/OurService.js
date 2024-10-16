import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import serv from '../../asset/images/serv.png'
export default class OurService extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <h2 className='text-center'>our services</h2>

            <Row>

                <Col lg={4} md={6} sm={12}>
                <Card>
                <img src={serv} alt=''></img>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</Col>    


<Col lg={4} md={6} sm={12} >
                <Card>
                <img src={serv} alt=''></img>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</Col>  


<Col lg={4} md={6} sm={12}>
                <Card>
                <img src={serv} alt=''></img>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</Col>  


<Col lg={4} md={6} sm={12}>
                <Card>
      <img src={serv} alt=''></img>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</Col> 

            </Row>
        </Container>
      </Fragment>
    )
  }
}
