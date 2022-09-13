import { useContext } from "react";
import { AuthContext } from "../context/AuthProvidor/AuthProvidor";

const useAuth =()=>{
   const auth=useContext(AuthContext)
   return auth;
}
export default useAuth;