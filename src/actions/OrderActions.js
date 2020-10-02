import axios from "axios"; //ดึงข้อมูลจาก server
import {ORDERS_FETCH} from "./types";

// สร้าง method เรียกให่ส่ง action ไปหา reducer ส่งไปบอกว่าให้เปลี่ยนแปลงข้อมูล order
export const ordersFetch = () => {
    return dispatch =>  {
        axios.get(process.env.REACT_APP_API_URL +"/orders").then(
            res => {
                dispatch({ type : ORDERS_FETCH , payload : res.data});
            });
    }
}

export const orderDelete = id => {
    return dispatch => {
        axios.delete(process.env.REACT_APP_API_URL +"/orders/" +id).then(res => {
            axios.get(process.env.REACT_APP_API_URL +"/orders").then(
            res => {
                dispatch({ type : ORDERS_FETCH , payload : res.data});
            });

        })
    }
}