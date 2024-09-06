import axios from 'axios'
import {Bounce,toast} from 'react-toastify'
export async function removeWishList(productId) {
    try {
       await axios.delete('https://ecommerce.routemisr.com/api/v1/wishlist/' + productId, {
        headers: {
          token: localStorage.getItem('token')
        }
      });
      // setCart((prevCart) => ({
      //   ...prevCart,
      //   data: prevCart.data.filter(item => item._id !== productId)
      // }));
      

      
      toast.success("Product has been removed successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        className: 'custom-toast-success',
      });
    } catch (error) {
      toast.error("Failed to remove product", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        className: 'custom-toast-error',
      });
    }
  }