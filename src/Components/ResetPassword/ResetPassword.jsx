import axios from "axios";
import React, { useContext, useState } from 'react'
import {useFormik} from 'formik'
import { Link,NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthContext";
 import * as Yup from 'yup';
export default function ResetPassword() {
  const[isLoading,setIsLoading]=useState(false)
  const[errorMss,setErrorMss]=useState("")
  const[sucessMss,setSucessMss]=useState("")
  let {setUserToken}=useContext(AuthContext)
  const navigate=useNavigate()

   let {handleSubmit,values,handleChange,errors,handleBlur,touched}= useFormik({
        initialValues:{
            "email":"",
            "newPassword":"",
        },
onSubmit:ResetPassword,
validationSchema: Yup.object({
  email:Yup.string().required("Email is required"),
  newPassword:Yup.string().required("password is required"),
  

})
    })

   async  function ResetPassword(){
    setErrorMss("")
    setIsLoading(true)
        await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",values).then(({data})=>{
setIsLoading(false)
setUserToken(data.token);

localStorage.setItem("token",data.token)
setSucessMss("Password change Succesfully")
  navigate("/")




        }).catch((err)=>{
setIsLoading(false)
setErrorMss(err.response.data.message)
          })

    }
 
  return (
    
    
<div className="min-h-screen flex items-center justify-center">
<div className=" w-full md:w-1/2 lg:w-1/3 max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
  <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Reset Password</h1>
  <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
   

    

   

    <div className="flex items-start flex-col justify-start">
      <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Email:</label>
      <input onBlur={handleBlur} type="email" onChange={handleChange} id="email" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
     {touched.email && errors.email &&<p className='text-red-500'>{errors.email}</p>}
    </div>

    <div className="flex items-start flex-col justify-start">
      <label htmlFor="newPassword
      " className="text-sm text-gray-700 dark:text-gray-200 mr-2">Password:</label>
      <input type="password" onBlur={handleBlur} onChange={handleChange} id="newPassword" name="newPassword" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
     {touched.newPassword &&errors.newPassword && <p className='text-red-500'>{errors.newPassword}</p>}
    </div>

   <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"disabled ={isLoading}>Change Password{isLoading&&<i className="fas fa-spinner af-span"></i>}</button>
   {errorMss&&<p  className="text-red-500 text-center">{errorMss}</p>}
  {sucessMss&&<p  className="text-green-500 text-center">{sucessMss}</p>}
  </form>

  <div className="mt-4 text-center flex space-x-4">
   
   
</div>
  
</div>
</div>
  )
}
