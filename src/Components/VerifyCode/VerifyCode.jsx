import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VerifyCode() {
    const [code, setCode] = useState(""); 
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    useEffect(()=>{
        
        
    },[]);
    async function verifyCode(resetCode) {
        setLoading(true);
       
            await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", { 
                resetCode: resetCode  })
                .then (response =>{
                    setLoading(false);
                    console.log(response.data)
            if (response.data.status === "Success") {
                setMessage("Code verified successfully.");
                console.log("Verification successful:", response.data.message);
                navigate("/resetpassword"); 
            } else {
                setError("Failed to verify the code. " + response.data.message);
                console.log("Verification failed:", response.data.message);
            }
        }).catch(error => {
            console.error('error occured',error);
          }
            ) 
    }

    return (
        <div>
            <form className="w-full max-w-md mx-auto p-6">
                <div className="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Verify Code</h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Enter the code sent to your email.
                            </p>
                        </div>

                        <div className="mt-5">
                            <div className="grid gap-y-4">
                                <div>
                                    <label htmlFor="code" className="block text-sm font-bold ml-1 mb-2 dark:text-white">Verification Code</label>
                                    <div className="relative">
                                        <input
                                            value={code}
                                            type="text"
                                            id="code"
                                            name="code"
                                            className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                            required
                                            onChange={(e) => setCode(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    <button onClick={(e) => {e.preventDefault();verifyCode(code)}}
                                        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"type="button"disabled ={loading}>
                                        Verify{loading&&<i className="fas fa-spinner af-span"></i>}
                                    </button>
                                    {loading && <p>Loading...</p>}
                                {message && <p className="text-green-500 mt-2">{message}</p>}
                                {error && <p className="text-red-500 mt-2">{error}</p>}
                                </div>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

