import React, { useState, useEffect } from 'react';
import TopProductOfTheDay from './orders';

const FilesUpload = () => {
  const [files, setFiles] = useState([]);
  const [orders, setOrdersData] = useState([]);
  const [products, setProductsData] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;

    // Convert FileList to an array
    const filesArray = Array.from(selectedFiles);

    setFiles(filesArray);

    // Read each file as JSON
    Promise.all(
      filesArray.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            try {
              const data = JSON.parse(e.target.result);
              const fileDetails = [data, file.name];
              resolve(fileDetails);
            } catch (error) {
              reject(error);
            }
          };
          reader.readAsText(file);
        });
      })
    )
      .then((jsonArray) => {
        jsonArray.forEach((data) => {
          if (data[1] == 'products.json') {
            setProductsData(data[0]);
          } else {
            setOrdersData(data[0]);
          }
        });
      })
      .catch((error) => {
        console.error('Error reading JSON files:', error);
      });
  };

  return (
    <div>
      <h3>Upload Data</h3>

      <input type="file" multiple onChange={handleFileChange} />
      <TopProductOfTheDay
        entireOrders={orders}
        allProducts={products}
      ></TopProductOfTheDay>
    </div>
  );
};
export default FilesUpload;
