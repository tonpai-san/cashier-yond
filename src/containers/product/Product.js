import React,{ Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";
import {withRouter} from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";
import {productsFetch, productDelete} from "../../actions";



class Product extends Component {
    constructor(props) {
        super(props);
        // this.state = {products : null};
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);

    }



    componentDidMount() {

        this.props.productsFetch();
        // axios.get("http://localhost:3001/products").then(res => {
        //     this.setState({products : res.data});
        //     console.log(res.data);
        // })
    }

    editProduct(product) {
        this.props.history.push("products/edit/" + product.id);
    }

    delProduct(product) {
        this.props.productDelete(product.id);
        // axios.delete("http://localhost:3001/products/" + product.id).then(res => {
        //     axios.get("http://localhost:3001/products").then(res => {
        //         this.setState({products : res.data});
        //     })
        // })

    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row p-5">
                        <div className="col-md-6 title">
                            <h1>รายการสินค้า</h1>
                        </div>
                        <div className="col-md-6"> 
                            <button className="btn btn-success title float-right" onClick={()=> this.props.history.push('products/add')}>เพิ่มสินค้า</button>
                        </div>

                        {this.props.products && Array.isArray(this.props.products) && 
                            (<ProductList products={this.props.products} 
                                onDelProduct={this.delProduct} onEditProduct={this.editProduct} 
                            />)
                        }
                    </div>
                    
                </div>
                <Footer company ="Tonpai San" email="d.luckkyy@gmail.com" />
            </div>
        )
    }
}
function mapStateToProps ({products}) {
    return {products};
}
export default withRouter(connect(mapStateToProps,{productsFetch, productDelete})(Product));