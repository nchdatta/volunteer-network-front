import { useContext } from "react"
import { authContext } from "../Context/AuthContext"

const useAuth = () => {
    return useContext(authContext);
}
export default useAuth;