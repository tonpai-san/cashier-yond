import React, { Component } from 'react';
import Header from "../components/Header";
import Monitor from "../components/monitor/Monitor";
import Footer from "../components/Footer";
// import ProductItem from "../components/product/ProductItem";
// import axios from "axios";
import {connect} from "react-redux";
import {productsFetch} from "../actions";


class Home extends Component {

  constructor(props) {
    super(props);
    // this.state = {products : ""};
  }
  componentDidMount() {
    this.props.productsFetch();

    // จุดที่่โหลดข้อมูลสินค้า
    // วิธีที่ 1
  //   this.setState({products : [
  //     { id: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
  //     { id: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
  //     { id: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
  //     { id: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
  //     { id: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
  //     { id: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
  // ]})

  // วิธีที่ 2 
  // fetch("http://localhost:3001/products", {method:"GET"})
  //   .then(res => res.json())
  //   .then(res => {this.setState({products : res})})
  // วิธีที่ 3
  // axios.get("http://localhost:3001/products").then(res => {
  //   // console.log(res.data);
  //   {this.setState({products :res.data})}
  // });
  
  }

  render() {
    return (
      <div>
         <Header />
         {this.props.products && Array.isArray(this.props.products) && 
         <Monitor products={this.props.products}/>
          }
         <Footer company ="Tonpai San" email="d.luckkyy@gmail.com"/>
      </div>
    );
  }
  
}
function mapStateToProps ({products}) {
  // console.log(state);
  return {products};
}

export default connect(mapStateToProps,{productsFetch}) (Home);
