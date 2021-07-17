import React, { useState } from 'react';
import Title from './comps/title';
import * as XLSX from 'xlsx';

function App() {

  const [items, setItems] = useState([]);

  const readExcel = (file) => {

    const promise = new Promise((resolve, reject) => {

      const fileReader = new FileReader();

      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {

        const bufferArray = e.target.result;

        const workBook = XLSX.read(bufferArray, { type: "buffer" });

        const workSheetName = workBook.SheetNames[0];

        const workSheet = workBook.Sheets[workSheetName];

        const data = XLSX.utils.sheet_to_json(workSheet);

        resolve(data);
      };

      fileReader.onerror = (error) => {

        reject(error);
      };
    });

    promise.then((d) => {

     setItems(d)

    });
  };



  return (
    <div className="App">
      <Title/>
      <input type="file" 
      onChange={(e)=> 
      {const file = e.target.files[0]; 
      readExcel(file);
      }} />
    </div>
  );
}

export default App;


