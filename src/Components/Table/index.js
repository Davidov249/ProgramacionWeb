import React from 'react'
import Table from 'react-bootstrap/Table'

const index = () => {
    return (
        <Table striped hover responsive variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Behind Closed Doors</td>
                    <td>Rise Against</td>
                    <td>Punk Rock</td>
                    <td>2:35</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Rap God</td>
                    <td>Eminem</td>
                    <td>Rap</td>
                    <td>4:50</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Torero</td>
                    <td>Chayanne</td>
                    <td>Pop</td>
                    <td>3:25</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default index
