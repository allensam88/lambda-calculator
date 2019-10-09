import React, { useState } from "react";

//import any components needed
import NumberButton from './NumberButton'
//Import your array data to from the provided data file
// example of import from data.js. Note all the ../   This is how we move through folders. 
import { numbers } from '../../../data'; 

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  //const [numberState, setNumberState] = useState(numbers);
  const [num, setNum] = useState(numbers);

  return (
    <div className="number_container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/}
       {num.map((item, index) => ( <NumberButton key={index} number={item} displayNums={props.displayNums}/> ))}
    </div>
  );
};

export default Numbers;