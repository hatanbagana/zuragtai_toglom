import React, { useEffect, useState } from "react";
import "./App.css";
import Item from "./Components/Item";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App1() {
  const [array1, setArray1] = useState([
    ["1.jpg", "2.jpg", "3.jpg"],
    ["4.jpg", "5.jpg", "6.jpg"],
    ["7.jpg", "8.jpg", "0.png"],
  ]);
  const [winPos, setWinPos] = useState()
  const [changed, setChanged] = useState(false);
  function shuffle(array) { 
    return array.sort(() => Math.random() - 0.5);
  }
  
  const [pos, setPos] = useState()

  useEffect(()=>{
    setWinPos([
      ["1.jpg", "2.jpg", "3.jpg"],
      ["4.jpg", "5.jpg", "6.jpg"],
      ["7.jpg", "8.jpg", "0.png"],
    ])
    setArray1(array1.map(row=>shuffle(row)))
    setPos(findZeroClicked())

  },[])

 

  function handleChange(id,rowIndex,colIndex) {


    if (validation(id,rowIndex,colIndex)) {

      let temp = array1;
      let temp1 = temp[pos[0]][pos[1]];
      temp[pos[0]][pos[1]] = temp[rowIndex][colIndex];
      temp[rowIndex][colIndex] = temp1;

      setPos([rowIndex,colIndex])
      setArray1(temp);
      setChanged(!changed);
    }

    checkWinning()
  }


  function findZeroClicked() {
    let row = array1.length;
    let col = array1[0].length;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (array1[i][j] == "0.png") {
          return [i, j];
        }
      }
    }
  }

  function validation(id,row,col) {


    if(winPos === array1){
      console.log("Yalla bandia");
      return false;
    }else{

      return true;
    }


  }


  
  function checkWinning(){
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array1[1].length; j++) {
        if(array1[i][j] !== winPos[i][j]){
          return false
        }
        
      }
      
    }
    setTimeout(() => {
      
      alert('yalla');
    }, 1000);
  }




  return (
    <div>

      <div className="board">
        {array1.map((row,rowIndex) =>
          row.map((col, i) => <Item key={i} data={col} rowIndex = {rowIndex} colIndex={i} func={handleChange} />)
        )}
      </div>
    </div>
  );
}
