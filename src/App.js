import React from "react";
import "./style.css";

export default function App() {
  const [inputTextBox, setinputTextBox] = React.useState({
    productName: "",
    description: "",
    quantity: ""
  })

  const [inputTextBoxList, setList] = React.useState([])
  function onSubmitHander(e) {
    e.preventDefault()
    const addInput = {
      id: new Date().getTime(),
      inputTextBoxName: inputTextBox.productName,
      inputDescrption: inputTextBox.description,
      inputQuantity: inputTextBox.quantity,
      complete: "false"
    }
    setList([...inputTextBoxList].concat(addInput))
    setinputTextBox("inputTextBoxList")
    console.log(inputTextBoxList);
  }

  function deleteinputText(id) {
    let updatedlist = [...inputTextBoxList].filter(inputTextBox => inputTextBox.id !== id)
    setList(updatedlist)
  }
  return (
    <div className="shopping">
      <h1>Shopping List</h1>
      <h1>Add New Items</h1>
      <label className="label1">*</label>
      <h2>Name</h2>
      <form onSubmit={onSubmitHander}>
        <input
          type="text"
          name="productName"
          value={inputTextBox.productName}
          onChange={(e) => setinputTextBox({ ...inputTextBox, productName: e.target.value })}
          className="inputTextBox" placeholder="Enter name"
        />
        <h3>Description</h3>

        <textarea type="text"
          name="description"
          value={inputTextBox.description}
          onChange={(e) => setinputTextBox({ ...inputTextBox, description: e.target.value })}
          className="inputTextArea" placeholder=" Enter Description" rows="5" cols="31" />

        <label className="label2">*</label>
        <h3>Quantity</h3>
        <input
          type="number"
          name="quantity"
          value={inputTextBox.quantity}
          onChange={(e) => setinputTextBox({ ...inputTextBox, quantity: e.target.value })}
          className="inputTextBox1" placeholder="0"
        />
        <button className="buttonAdd">Add To List</button>
       
      </form>

      {inputTextBoxList.map((data) => (
        <div key={data.id}>
          <div className="listlayout">
            <div className="li2">
              <h4>Item Name</h4>
              <div>
                {data.inputTextBoxName}
              </div>

              <h5>Description</h5>
              <div className="lstLyt1">
                {data.inputDescrption}
              </div>

              <h6>Quantity</h6>
              <div className="lstLyt2">
                {data.inputQuantity}
              </div>
              <button onClick={() => deleteinputText(data.id)} className="buttonCancel">Cancel</button>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}
