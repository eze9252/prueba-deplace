import * as React from 'react'
import TableBoostrap from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import { AppConsumer } from '../../../src/Context'

const Table = () =>{

        return(
            <TableBoostrap striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Species</th>
                    <th>Gender</th>
                    <th>Foto</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    <AppConsumer>
                    {context => (
                        context.characters.map(data => {
                            return <tr key={data.id}>
                            <th>{data.id}</th>
                            <th>{data.name}</th>
                            <th>{data.status}</th>
                            <th>{data.species}</th>
                            <th>{data.gender}</th>
                            <th><img alt="img" className="img-character" src={data.image}></img></th>
                            <th><Card.Link href={"/detalle/"+data.id}>Ver detalle</Card.Link></th>
                            </tr>
                        })
                    )}
                    </AppConsumer>  
                }
                </tbody>
            </TableBoostrap>
        );
}

export default Table;