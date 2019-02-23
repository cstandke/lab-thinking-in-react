import React, { Component } from "react";
import SearchBar from "./SearchBar.js";
import ProductTable from './ProductTable.js';

class FilterableProductTable extends Component {
  constructor(props) {
    super();
    this.state = {
      // products: props.products.data
      searchTerm: ""
    };
    this.products = props.products.data
  }

  updateProductList = (searchTerm) => {
    this.setState({searchTerm: searchTerm.toLowerCase()})
  }

  render() {
    // console.log(this.state)

    const newProductList = this.products.filter((p)=> p.name.toLowerCase().includes(this.state.searchTerm))
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar productSearch={this.updateProductList}/>
        <ProductTable products={newProductList}  />
      </div>
    );
  }
}

export default FilterableProductTable;
