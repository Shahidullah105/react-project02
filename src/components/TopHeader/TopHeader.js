import React, { Component, Fragment } from 'react'
import '../../asset/css/style.css';
import { Col, Container, Row } from 'react-bootstrap';

export default class TopHeader extends Component {
  render() {
    return (
      <Fragment>
          <Container fluid className='topheader p-0'>
            <div className='topoverlay'>
                <Container className='topcontent'>
                    <Row>
                        <Col className='text-center'>
                        <h1 className='toptitle'> grow your business</h1>
                        <h4 className='topsubtitle'> Javascript Image Slider - nonjQuery</h4>
                        <button> Join with us</button>
                        </Col>
                    </Row>
                </Container>

            </div>

          </Container>

      </Fragment>
    )
  }
}
