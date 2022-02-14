# 🔨🔨 Bunnings Sizzling-Hot 🔥 Products

[*_This is Work in progress_*]

Bunnings will be launching a new page to allow customers to see the list of
sizzling-hot products. We want you to write the business logic to determine
which products to display

* Top product per day
* Top product for last 3 days - **Assume today's date is 21/07/2021**

Write a program which finds the top product based on the following rules:

* When accounting for sales of a product on a day or for a given period, we
  only tally a single sale per order.
  > For example, If a customer buys some hammers in a single orders as
  > represented by the json below when consolidating the sales you
  > consider this as a single sales.
  ```json
  [
    {
      "orderId": "O10",
      "customerId": "C1",
      "entries": [{ "id": "P1", "quantity": 2 }],
      "date": "19/07/2021",
      "status": "completed"
    }
  ]
  ```
* Multiple orders of the same product by the same customer on the same day are
  **not** considered.
  > For example, If a customer buys some hammers in 2 separate orders on the
  > same day as represented by the json below when consolidating the sales you
  > consider this as a single sales.
  ```json
  [
    {
      "orderId": "O10",
      "customerId": "C1",
      "entries": [{ "id": "P1", "quantity": 2 }],
      "date": "19/07/2021",
      "status": "completed"
    }, {
      "orderId": "O11",
      "customerId": "C1",
      "entries": [{ "id": "P1", "quantity": 3 }],
      "date": "19/07/2021",
      "status": "completed"
    }
  ]
  ```
* For orders that are cancelled do not account the original completed order
  towards the calculations.
  > For example, If a customer has placed an order on 19th and then cancelled
  > the order on the next day then we do not account order O10 towards the 
  > sales.
  ```json
  [
    {
      "orderId": "O10",
      "customerId": "C1",
      "entries": [...],
      "date": "19/07/2021",
      "status": "completed"
    }, {
      "orderId": "O11",
      "date": "20/07/2021",
      "status": "cancelled"
    }
  ]
  ```
* If multiple products have equal sales, select alphabetically first only.
  > Example If a "Hammer" and "BBQ" had similar sales you choose "BBQ"

Sample Input Files

* Orders: [orders.json](inputs/orders.json)
* Product Details: [products.json](inputs/products.json)

The expected output for the above input is as below:

```text
19/07/2021: "Ezy Storage 37L Flexi Laundry Basket - White"
20/07/2021: "Ezy Storage 37L Flexi Laundry Basket - White"
21/07/2021: "Arlec 160W Crystalline Solar Foldable Charging Kit"
Last 3 Days: "Ezy Storage 37L Flexi Laundry Basket - White"
```

Consider other inputs and edge cases, not just the supplied input.

## Deliverables

* Application should be able to accept above data as json files from input
  folder 🗂️
* We encourage you to provide a well unit-tested code 🧪
* We encourage you to consider design patterns and S.O.L.I.D principles. 🧱
  > We understand if you prefer functional programming over OOP. The above
  > recommendation only applies for folks attempting the test in OOP paradigm.
  > 🌱
* We recommend not spending more than half-a-day ⌚
* The code you produce can be in any language ⭐
* The output of the efforts must be committed back into a Repo in Github, and
  the URL shared back for review. The Github repo must be accessible ❗
* Document instructions on how to install and run your solution in the README 📄
* Be kind to yourself and enjoy the challenge 🔥😎
