import React, {Component} from "react";
// import Menu from "./Menu/Menu";

export const Store=React.createContext();

export const HOC=(ToWrap)=>{
  return class WrappedWithMenu extends Component{
    state={
      order:'cheapest',
      sex:this.props.sex?this.props.sex:'all',
      type:this.props.type?this.props.type:'all',
      search:[],
      searchValue:'',
      cart:[],
    }
    componentDidMount(){
      if(localStorage.getItem('cart')){
        const downloaded=JSON.parse(localStorage.getItem('cart'));
        this.setState({cart:downloaded});
      }
    }
    render(){
      const {order,search,searchValue,cart}=this.state;
      const {profile,logged}=this.props;
      const {products}=this.props??[];
      const changeState=(newState)=>this.setState(newState);
      const searchItem=(e)=>{
        const {target}=e;
        const {value}=target;

        this.setState(
          value!==''?
          {search:products.filter(({name})=>name.toLowerCase().includes(value.toLowerCase()))}:
          {search:[]}
        ,this.setState({searchValue:e.target.value}));
      }
      const saveToLocalStorage=(e, newObjectInCart)=>{
        e.preventDefault();
        const copy=[...cart];
        copy.push(newObjectInCart);
        this.setState({cart:copy},localStorage.setItem('cart', JSON.stringify(copy)));
      }
      const sex=this.props.sex?this.props.sex:this.state.sex;
      const type=this.props.type?this.props.type:this.state.type;
      return(
        <Store.Provider value={{products,order,sex,type,search,cart,profile,logged,changeState,saveToLocalStorage}}>
          {/* <Menu searchItem={searchItem} searchValue={searchValue}/> */}
          <ToWrap profile={profile} {...this.props}/>
        </Store.Provider>
      )
    }
  }
}

export default HOC;