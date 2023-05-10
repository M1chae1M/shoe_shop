import React, {Component} from "react";
// import ProductsList from "./ProductsList/ProductsList";
// import TopFilters from "./Filters/TopFilters";
import HOC from "./HOC";
import URL from "./URLfilter";
import WithAuth from "./WithAuth";
import ProductsHOC from "./ProductsHOC";

class App extends Component{
  render(){
    const styles={
      App:{
        justifyItems:'center',
        display:'grid',
        alignContent:'center',
        height:'fit-content',
        overflowY:'scroll',
        padding:'5px',
        width:'70vw',
      },
    }
    return(
      <div id="App" style={styles.App}>
        {/* <TopFilters/> */}
        {/* <ProductsList/> */}
      </div>
    )
  }
}

export default WithAuth(URL(ProductsHOC(HOC(App))));