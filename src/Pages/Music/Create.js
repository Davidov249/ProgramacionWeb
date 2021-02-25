import React from 'react'
import SongForm from './../../Components/Forms/songdata'
import {Container, Row, Col} from 'react-bootstrap'

const Create = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Agreagar Cancion</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SongForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Create
