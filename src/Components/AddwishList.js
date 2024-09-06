import axios from 'axios'
import {Bounce,toast} from 'react-toastify'
export async function addProducToWishList(productId){
    let {data}= await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{
        productId:productId
    },{
        headers:{
            token:localStorage.getItem("token")
        }
    })
    console.log(data)

toast.success("it has been sucuffely added ", {
position: "top-right",
autoClose: 5000,
hideProgressBar: true,
closeOnClick: true,
bpauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
}