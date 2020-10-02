import React, { Component } from "react";

class Calculator extends Component {

    showOrder (orders) {
        if(!orders || orders.length == 0) {
            return <li className="text-right text-muted title">ไม่มีสินค้าที่เลือก</li>
        } else {
            return orders.map(order => {
                return (
                <li className="text-right text-success title">
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity} THB 
                        <button className="btn btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)}>X</button>
                    </li>
                    )
            })
        }
    }
// map คือการเข้าถึงรายการแต่ละตัว

    // รับค่าที่ส่งมาจาก props monotor
    

    render() {
        const {totalPrice, orders} = this.props;
        return(
            <div>
                <h1 className="text-right">{totalPrice} THB</h1>
                <hr />

                <ul className="list-unstyled">
                   {this.showOrder (orders)}
                </ul>
                <hr />
                <button className="btn btn-success btn-block title" onClick={() => this.props.onConfirmOrder()} >ยืนยัน</button>
                <button className="btn btn-danger btn-block title"onClick={() => this.props.onCancleOrder()}>ยกเลิก</button>
            </div>
        )

    }
}

export default Calculator;