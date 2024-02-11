import React from 'react';

var OrderData = [];
var Products = [];
const topProductsByDay = {};
var productName;

const findTopProduct = () => {
  if (OrderData && OrderData.length < 0) return;
  // Step 2: Group orders by date
  const ordersByDay = {};

  const cancelledOrder = OrderData.filter((obj) => {
    return obj.status === 'cancelled';
  });

  OrderData.forEach((order) => {
    const orderDate = order.date;
    if (!ordersByDay[orderDate]) {
      ordersByDay[orderDate] = [];
    }
    ordersByDay[orderDate].push(order);
  });

  Object.keys(ordersByDay).forEach((day) => {
    const orders = ordersByDay[day];
    const productQuantities = {};
    orders.forEach((order) => {
      if (order.entries) {
        order.entries.forEach((product) => {
          const productId = product.id;
          const quantity = product.quantity;

          var existing = orders.filter(function (el) {
            if (
              el.customerId === order.customerId &&
              el.orderId !== order.orderId
            ) {
              el.entries.filter(function (y) {
                if (y.productId === productId) {
                  return el;
                }
              });
            }
          });

          if (existing && existing.length > 0) {
            return;
          }

          var cancelled = cancelledOrder.filter(function (el) {
            if (order.orderId === el.orderId) {
              return el;
            }
          });
          if (cancelled && cancelled.length > 0) {
            return;
          }

          if (productQuantities[productId]) {
            productQuantities[productId] += quantity;
          } else {
            productQuantities[productId] = quantity;
          }
        });
      }
    });

    const topProduct = Object.keys(productQuantities).reduce((a, b) =>
      productQuantities[a] > productQuantities[b] ? a : b
    );
    const prdt = Products.filter(function (el) {
      if (el.id === topProduct) {
        return el;
      }
    });

    topProductsByDay[day] = {
      productId: topProduct,
      quantity: productQuantities[topProduct],
      productName: prdt[0].name,
      date: day
    };
  });

  return topProductsByDay;
};

const findLastThreeDaysTopProd = () => {
  var list = [];
  var LastTopRatedProd;

  const currentDate = new Date('2021-07-21');
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(currentDate.getDate() - 3);

  var topProducts = Object.keys(topProductsByDay).map(
    (day) => topProductsByDay[day]
  );

  const lastThreeOrders = topProducts.filter((order) => {
    var formattedDate = order.date.replace(
      /(\d\d)\/(\d\d)\/(\d{4})/,
      '$3-$2-$1'
    );
    const orderDate = new Date(formattedDate);
    return (
      orderDate.getDate() >= threeDaysAgo.getDate() &&
      orderDate.getDate() <= currentDate.getDate()
    );
  });

  const productQuantityMap = {};
  if (lastThreeOrders && lastThreeOrders.length > 0) {
    const count = 1;
    lastThreeOrders.forEach((order) => {
      const id = order.productId;
      if (productQuantityMap[id]) {
        productQuantityMap[id] += count;
      } else {
        productQuantityMap[id] = count;
      }
    });

    const productArray = Object.keys(productQuantityMap).map(
      () => productQuantityMap
    );

    productArray.forEach((obj) => {
      // Access properties of each object and perform an action
      Object.keys(obj).forEach((key) => {
        if (obj[key] > 1) {
          LastTopRatedProd = Products.find((y) => {
            if (y.id === key) {
              return y;
            }
          });
          return LastTopRatedProd;
        } else {
          var prd = Products.find((y) => {
            if (y.id === key) {
              return y;
            }
          });
          return list.push(prd);
        }
      });
    });

    if (LastTopRatedProd && LastTopRatedProd.name) {
      productName = LastTopRatedProd.name;
    } else if (list && list.length > 0) {
      const firstObject = list.find((obj) => typeof obj === 'object');
      productName = firstObject.name;
    }
  }
};

const TopProductOfTheDay = ({ entireOrders, allProducts }) => {
  if (entireOrders && allProducts) {
    OrderData = entireOrders;
    Products = allProducts;

    // get top products of each day
    findTopProduct();

    //top product in last three days
    findLastThreeDaysTopProd();
  }

  return entireOrders && allProducts && entireOrders.length > 0 ? (
    <div>
      <h3>Top Product Per Day</h3>

      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Product Name</th>
            {/* Add more columns based on your product data */}
          </tr>
        </thead>
        <tbody>
          {Object.keys(topProductsByDay).map((day) => (
            <tr key={day}>
              <td>{day}</td>
              <td> {topProductsByDay[day].productName}</td>
              {/* Add more cells based on your product data */}
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Last 3 Days</h3>
      <div>{productName}</div>
    </div>
  ) : (
    <div></div>
  );
};

export default TopProductOfTheDay;
