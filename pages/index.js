import React, {Component} from "react";
import ProductsList from "./ProductsList/ProductsList";
import TopFilters from "./Filters/TopFilters";
import HOC from "./HOC/HOC";
import URL from "./HOC/URLfilter";
import WithAuth from "./HOC/WithAuth";
import ProductsHOC from "./HOC/ProductsHOC";

class App extends Component{
  render(){
    const styles={
      App:{
        justifyItems:'center',
        display:'grid',
        alignContent:'center',
        maxHeight:'85vh',
        padding:'5px',
        width:'70vw',
      },
    }
    return(
      <div id="App" style={styles.App}>
        <TopFilters/>
        <ProductsList/>
      </div>
    )
  }
}

export default WithAuth(URL(ProductsHOC(HOC(App))));