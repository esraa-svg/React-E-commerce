import axios from "axios";
import React, { useState } from 'react'
import {useFormik} from 'formik'
 import * as Yup from 'yup';
 import { Link,NavLink, useNavigate } from 'react-router-dom';
export default function Register() {
  const   initialValues={
    "name":"",
    "email":"", 
    "password":"",
    "rePassword":"",
    "phone":""

}
  const validationSchema= Yup.object({
    name:Yup.string().required("Name is required").min(3,"Name length must be  more than 3").max(20,"Name length must be  less than  20"),
    email:Yup.string().required("Email is required"),
    password:Yup.string().required("password is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Minimum eight characters, at least one letter, one number and one special character:"),
    rePassword:Yup.string().required("rePassword is required").oneOf([Yup.ref("password")],"Password and rePassword must be matched"),
  phone:Yup.string().required("phone is required")
  
  })
  const[isLoading,setIsLoading]=useState(false)
  const[errorMss,setErrorMss]=useState("")
  const[sucessMss,setSucessMss]=useState("")
  const navigate=useNavigate()
   let {handleSubmit,values,handleChange,errors,handleBlur,touched}= useFormik({
initialValues,
onSubmit,
validationSchema,
    })
// function validateData(values){
//       let errors={};
// if(values.name=="") {
//   errors.name="Name is required"
// } else if(values.name.length<3){
//   errors.name="Name length must be  more than 3"
// }
// else if(values.name.length>20){
//   errors.name="Name length must be  less than  20"
// }
// if(values.email=="") {
//   errors.email="email is required"
// }if(values.password=="") {
//   errors.password="password is required"
// }else if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(values.password) !=true){
//   errors.password="Minimum eight characters, at least one letter, one number and one special character:"
// }

// if(values.rePassword=="") {
//   errors.rePassword="rePassword is required"
// }else if(values.rePassword !=values.password){
//   errors.rePassword="Password and rePassword must be matched"
// }
// if(values.phone=="") {
//   errors.phone="phone is required"
// }

// return errors;
//   }
   async  function onSubmit(){
    setIsLoading(true)
       await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values).then(({data})=>{
          setIsLoading(false)
          // console.log(data)
setSucessMss(data.message)
setTimeout(() => {
  navigate("/login")
}, 500);

setErrorMss("")
        }).catch((err)=>{
          setIsLoading(false)
          
          setErrorMss(err.response.data.message)

          setSucessMss("")
        })

       
    }
 
  return (
    
    
<div className="min-h-screen flex items-center justify-center mx-auto ">
<div className=" w-full md:w-1/2 lg:w-1/3 max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
  <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Welcome to FreshCart</h1>
  <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
   

    

    <div className="flex items-start flex-col justify-start">
      <label htmlFor="name" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Name:</label>
      <input onBlur={handleBlur}  onChange={handleChange} value={values.name} type="text" id="name" name="name" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
      {touched.name && errors.name && <p className='text-red-500'>{errors.name}</p>}
    </div>

    <div className="flex items-start flex-col justify-start">
      <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Email:</label>
      <input onBlur={handleBlur} type="email" onChange={handleChange} id="email2" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
     {touched.email && errors.email &&<p className='text-red-500'>{errors.email}</p>}
    </div>

    <div className="flex items-start flex-col justify-start">
      <label htmlFor="password" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Password:</label>
      <input type="password" onBlur={handleBlur} onChange={handleChange} id="password" name="password" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
     {touched.password &&errors.password && <p className='text-red-500'>{errors.password}</p>}
    </div>

    <div className="flex items-start flex-col justify-start">
      <label htmlFor="confirmPassword" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Confirm Password:</label>
      <input type="password" onBlur={handleBlur} onChange={handleChange} id="rePassword" name="rePassword" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
      {touched.rePassword &&errors.rePassword &&<p className='text-red-500'>{errors.rePassword}</p>}
    </div>
    <div className="flex items-start flex-col justify-start">
    <label htmlFor="phone" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Phone Number:</label>
    <input type="phone"onBlur={handleBlur} onChange={handleChange} id="phone" name="phone" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
   {touched.phone &&errors.phone && <p className='text-red-500'>{errors.phone}</p>}
  </div>
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"disabled ={isLoading}>Register{isLoading&&<i className="fas fa-spinner af-span"></i>} </button>
  {errorMss&&<p  className="text-red-500 text-center">{errorMss}</p>}
  {sucessMss&&<p  className="text-green-500 text-center">{sucessMss}</p>}
  </form>

  <div className="mt-4 text-center">
    <span className="text-sm text-gray-500 dark:text-gray-300" >Already have an account? </span>
    <Link to={"/login"} className="text-blue-500 hover:text-blue-600">Login</Link>
  
  </div>

  
</div>
</div>
  )
}
