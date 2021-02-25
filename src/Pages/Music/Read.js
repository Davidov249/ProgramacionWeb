import React from 'react'
import CustomTable from '../../Components/Table/Table'
import {Container, Button, Row, Col} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Read = () => {
    return (
        <div inline className="align-middle">
            <Container fluid className="align-middle"> 
                <Row>
                    <Col sm={11} xs={8}>
                        <h1>Playlist</h1>
                    </Col>
                    <Col sm={1} xs={2} className="d-flex">
                        <Link to="/mcreate">
                            <Button variant="dark" className="pull-right align-self-center">
                                Agregar
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CustomTable />
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Read
