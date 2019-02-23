import React from "react";



const searchBar = (props) => {
  function handleChange(e) {
    let { name, value } = e.target;
    {props.productSearch(value)};
    // console.log(e.target);
  }
  return (
    <div>
      <label for="searchBar">Search:</label>
      <br />
      <input name="searchBar" onChange={(e)=>handleChange(e)}/>
    </div>
  );
};

export default searchBar;
