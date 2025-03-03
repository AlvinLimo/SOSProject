import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {

    const[formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
        password2:"",
        role:""
    })

    const navigate = useNavigate();

    const handleChange = async(e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await axios.post("http://localhost:7000/users/register", formData)
            console.log("Registration Succcessful", response)
            navigate("/login")
        }catch (error){
            console.log("Registration Failed", error.response?.data || error.message)
        }
    }

    return(
        
        <></>

    )

}

export default Register