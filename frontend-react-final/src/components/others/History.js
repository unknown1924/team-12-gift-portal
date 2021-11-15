import React from 'react';

const data = [
    {

        "orderId": 12,

        "order_date": "2021-11-12T14:08:57.781+00:00",

        "gift_id": 4,

        "order_Quant": 6,

        "rx_address": "Pune",

        "rx_phone": 7890345,

        "orderStatus": "Placed",

        "surprise": true,

        "total_amt": 0.0

    },
    {

        "orderId": 10,

        "order_date": "2021-11-10T14:08:57.781+00:00",

        "gift_id": 2,

        "order_Quant": 10,

        "rx_address": "Pune",

        "rx_phone": 22334455,

        "orderStatus": "Placed",

        "surprise": true,

        "total_amt": 0.0

    }

]

    
function orderhistory() {
    return (
      <div>
        <table class="table table-striped">
          <tr>
            <th>Order Id</th>
            <th>Order Quantity</th>
            <th>Order Date</th>
            <th>Order Status</th>
            <th>Total Amount</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.orderId}</td>
                <td>{val.order_Quant}</td>
                <td>{val.order_date}</td>
                <td>{val.orderStatus}</td>
                <td>{val.total_amt}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }
    
  export default orderhistory;