import React from 'react';
import { Table } from 'react-bootstrap';

const AllData = ({order}) => {
    return (
        <div>
            <Table striped bordered hover>
            <thead>
    <tr>
      <th>product name</th>
      <th>product price</th>
      <th>quantity</th>
      <th>wight</th>
      <th>time</th>

    </tr>
  </thead>
  <tbody>
  <tr>
      <td>{order.name}</td>
      <td>{order.price}</td>
      <td>1</td>
      <td>{order.wight}</td>
      <td>{order.orderTime}</td>
    </tr>
  </tbody>

        </Table>


            {/* <h1>{or.name}</h1> */}
        </div>
    );
};

export default AllData;