# Bunnings Sizzling-Hot Products

[*_This is Work in progress_*]

Bunnings will be launching a new page to allow customers to see the list of sizzling-hot products.  We want you to write the business logic to determine which products to display

* Top product per day
* Top product for last 3 days - **Assume today's date is 21/07/2021**

Write a program which finds the top product based on the following rules:

* Multiple orders of the same product for the same customer on the same day are **not** considered
* Cancelled orders should not be accounted
* If multiple products have equal sales, select alphabetically
  first only

Sample Input: [orders.json](inputs/orders.json)

The expected output for the above input is as below:

```text
19/07/2021: "Ezy Storage 37L Flexi Laundry Basket - White"
20/07/2021: "Ozito 80W Soldering Iron"
21/07/2021: "Arlec 160W Crystalline Solar Foldable Charging Kit"
Last 3 Days: "Ezy Storage 37L Flexi Laundry Basket - White"
```

## Deliverables

* Application should be able to accept above data as json files from input
  folder 🗂️
* We encourage you to provide a well unit-tested code 🧪
* We encourage you to consider design patterns and S.O.L.I.D principles
* We recommend not spending more than 2-3 hours ⌚
* The code you produce can be in any language ⭐
* The output of the efforts must be committed back into a Repo in Github, and
  the URL shared back for review. The Github repo must be accessible ❗
* Document instructions on how to install and run your solution in the README 📄
* Be kind to yourself and enjoy the challenge 🔥😎
