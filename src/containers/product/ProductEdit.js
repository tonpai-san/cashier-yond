import React, { Component } from "react";
import {connect} from "react-redux";
import {productCreate, productUpdate, productFetch} from "../../actions";
import Header from "../../components/Header";
import ProductForm from "../../components/product/ProductForm"
import Footer from "../../components/Footer";

class ProductEdit extends Component {

    componentDidMount() {
        if(this.props.match.params.id) {
            this.props.productFetch(this.props.match.params.id);
        }
    }

    render () {
        const {formValues, match, products, productCreate, productUpdate, values} = this.props;
        // console.log(match);
         console.log(formValues);
        return (
            <div>
                <Header />
                <div className="container col-md-5">

                    {match.path.indexOf("add") > 0 && (
                        <div>
                            <h2>เพิ่มสินค้า</h2>
                            {products.saved && (
                               <div className="alert alert-secondary title" role="alert">
                                   {products.msg}
                               </div>
                            )}
                            <ProductForm onProductSubmit={() => productCreate(formValues)} />
                        </div>
                    )}

                    {match.path.indexOf("edit") > 0 && (
                        <div>
                            <h2>แก้ไขข้อมูลสินค้า</h2>
                            {products.saved && (
                               <div className="alert alert-secondary title" role="alert">
                                   {products.msg}
                               </div>
                            )}
                            <ProductForm onProductSubmit={() => productUpdate(products.id, formValues)} />
                        </div>
                    )}
                </div>
                
                <Footer company ="Tonpai San" email="d.luckkyy@gmail.com" />
            </div>
        )
    }
}

function mapStateToProps ({form, products }) {
    console.log(form, products);
    return {formValues : form.ProductForm ? form.ProductForm.values : null  , products}

}

export default connect(mapStateToProps, { productCreate, productUpdate, productFetch})(ProductEdit);