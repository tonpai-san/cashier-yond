import axios from "axios"; //ดึงข้อมูลจาก server
import {PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE} from "./types";


export const  productFetch = id => {
    return dispatch =>  {
        axios.get(process.env.REACT_APP_API_URL +"/products/"+ id).then(
            res => {
                dispatch({ type : PRODUCT_FETCH, payload : res.data});
            }
        )
    }
}

// สร้าง method เรียกให่ส่ง action ไปหา reducer ส่งไปบอกว่าให้เปลี่ยนแปลงข้อมูล order
export const productsFetch = () => {
    return dispatch =>  {
        axios.get(process.env.REACT_APP_API_URL +"/products").then(
            res => {
                dispatch({ type : PRODUCTS_FETCH, payload : res.data});
            }
        )
    }
}

export const productDelete = id => {
    return dispatch => {
        axios.delete(process.env.REACT_APP_API_URL + "/products/" +id).then(res => {
            axios.get(process.env.REACT_APP_API_URL +"/products").then(
            res => {
                dispatch({ type : PRODUCTS_FETCH, payload : res.data});
            });

        })
    }
}

export const productCreate = values => {
    console.log(values);
    return dispatch => {
        axios.post(process.env.REACT_APP_API_URL +"/products", values).then(
            res => {
                dispatch({type : PRODUCT_CREATE});
            }
        )
    }
}

// export const productUpdate = (id, values) => {
//     return dispatch => {
//         axios.put("http://localhost:3001/products/" + id, values).then(res => {
//             dispatch({type : PRODUCT_UPDATE});
//         })
//     }
// }

export const productUpdate = (id, values) => {
	// console.log(id, values);
	return dispatch => {
		axios.put(process.env.REACT_APP_API_URL +"/products/"+ id, values).then(res => {
			dispatch({ type: PRODUCT_UPDATE });
		});
	}	
};

