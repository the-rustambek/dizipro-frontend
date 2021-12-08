import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function Profile(){
const {token,setToken} = useContext(AuthContext);

return <>

    <h1>Profile page</h1>
    <button onClick={()=>{
        setToken(null)
        }}>Chiqish</button>
</>
}