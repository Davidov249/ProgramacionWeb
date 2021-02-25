import React from 'react'
import {Table} from 'react-bootstrap'

export default class CustomTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playlist: [
                { num: 1, name: 'Behind Closed Doors', author: 'Rise Against', genre: 'Punk Rock', length: '2:35'},
                { num: 2, name: 'Rap God', author: 'Eminem', genre: 'Rap', length: '4:50'},
                { num: 3, name: 'Torero', author: 'Chayanne', genre: 'Pop', length: '3:25'},
                { num: 4, name: 'Hazy Skyscraper', author: 'Demondice', genre: 'J-Rap', length: '4:58'}
            ]
        }
    }

    renderTableData() {
        return this.state.playlist.map((song, index) => {
            const { num, name, author, genre, length } = song
            return (
                <tr>
                    <td>{num}</td>
                    <td>{name}</td>
                    <td>{author}</td>
                    <td>{genre}</td>
                    <td>{length}</td>
                </tr>
            )
        })
    }


    render() {
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
                    {this.renderTableData()}
                </tbody>
            </Table>
        );
    }
}
