import React from 'react';
import Title from './comps/title';
import './App.css';

// import * as XLSX from 'xlsx';

const Input = (props) => ( 
  <input type="file" name="file-input" multiple {...props} />

)
const App = () => {
  const onSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    console.log(e.target.files)
  }

  return (
    <div className="container">
      <Title/>
      <form className="form" onSubmit={onSubmit}>
        <div>
          <Input onChange={onChange} /> 
          <button type="submit">Submit</button>
          </div>
      </form>
    </div>
  )


}

export default App;


// previous code base
// const [items, setItems] = useState([]);

// const readExcel = (file) => {

//   const promise = new Promise((resolve, reject) => {

//     const fileReader = new FileReader();

//     fileReader.readAsArrayBuffer(file);

//     fileReader.onload = (e) => {

//       const bufferArray = e.target.result;

//       const workBook = XLSX.read(bufferArray, { type: "buffer" });

//       const workSheetName = workBook.SheetNames[0];

//       const workSheet = workBook.Sheets[workSheetName];

//       const data = XLSX.utils.sheet_to_json(workSheet);

//       resolve(data);
//     };

//     fileReader.onerror = (error) => {

//       reject(error);
//     };
//   });

//   promise.then((d) => {

//    setItems(d)

//   });
// };



// return (
//   <form> 
//   <div className="App">
//     <Title/>
//     <label> 
//     <input type="file" 
//     onChange={(e)=> 
//     {const file = e.target.files[0]; 
//     readExcel(file);
//     }} />
//      <span>+</span>
//     </label>
//   </div>
//   </form>
// );
// }