import { useState } from "react"

const Login=()=>{
    const [name,setName] = useState("alok")
    const [password, setPassword] = useState("123")
    
    const handleSubmit =(e)=>{
        // e.preventDefault();
        console.log("button clicked")
    }
    return(
        <>
            <input type="text" placeholder="Please enter your name here" />
            <input type="password" placeholder="Please enter your password here!!"/>
            <button type="submit" onClick={handleSubmit}>Login</button>
        </>
    )
}
export default Login
