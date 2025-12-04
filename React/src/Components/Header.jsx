import { PiSignIn, PiSignOut } from "react-icons/pi";
import { BsCart } from "react-icons/bs";
import { useState } from "react";
const Header =()=>{
    const [login, setLogin] = useState(true)
    const handleLogin =()=>{
        setLogin(!login)
    }
    return(
        <>
            <div className="bg-emerald-200 shadow-gray-900 m-0 flex justify-between content-center ">
                <ul className='flex m-2 gap-4 list-none'>
                    <li >Home</li>
                    <li>Products</li>
                    <li>ContactUs</li>
                </ul>
                <ul className="flex m-2 gap-4 list-none">
                    <li><BsCart /></li>
                    <li onClick={handleLogin} >{login?<PiSignIn />:<PiSignOut />}</li>
                </ul>
            </div>
        </>
    )
}
export default Header