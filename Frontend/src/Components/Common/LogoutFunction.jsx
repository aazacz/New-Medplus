import toast from "react-hot-toast";
import {  useNavigate  } from "react-router-dom"

export const handleLogout = (role) => {
    const navigate = useNavigate()

    try {

        if (role === "user") {
            localStorage.removeItem("UserjwtCookie")
            console.log("cookie Removed");
            // <Navigate to="/login" replace: {true} />
            navigate("/login", { replace: true })
        }
        else if (role === "Doctor") {
            localStorage.removeItem("DoctorjwtCookie")
            console.log("cookie Removed");
            navigate("/DoctorLogin", { replace: true })
        }
        else {
            localStorage.removeItem("AdminjwtCookie")
            console.log("cookie Removed");
            navigate("/AdminLogin", { replace: true })
        }

    } catch (error) {
        console.log(error.message)
        toast(error.message)
    }
}