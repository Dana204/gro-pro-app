// import { cartActions } from "./cart-slice";

// export const fetchCartData = () => {
//     return async (dispatch) => {
//         const fetchData = async () => {
//             const response = await fetch('https://gropro-cartdata-default-rtdb.firebaseio.com/cart.json');

//             if (!response.ok) {
//                 throw new Error('Sending cart data failed');
//             }

//             const data = await response.json;
//             return data;
//         }

//         try {
//             const cartData = await fetchData();
//             // dispatch(cartActions.replaceCart(cartData));
//             dispatch(cartActions.replaceCart({
//                 items: cartData.items || [],
//                 totalCartQuantity: cartData.totalCartQuantity, 
//                 totalCartCost: cartData.totalCartCost
//             }));
//         } catch (error) {
//             throw new Error('Sending cart data failed again');
//         }
//     }
// }


// export const sendCartData = (cart) => {
//     return async () => {
//         // dispatch();
//         const sendRequest = async () => {
//             const response = await fetch(
//                 'https://gropro-cartdata-default-rtdb.firebaseio.com/cart.json',
//                 {
//                     method: 'PUT',
//                     body: JSON.stringify({
//                         items: cart.items, 
//                         totalCartQuantity: cart.totalCartQuantity, 
//                         totalCartCost: cart.totalCartCost
//                     }),
//                     // body: JSON.stringify(cart),
//                 }
            
//             )
    
//             if (!response.ok) {
//                 throw new Error('Sending cart data failed');
//             }
//         }

//         try {
//             await sendRequest();
//         } catch (error){
//             throw new Error('Sending cart data failed');
//         }
//     }
// }