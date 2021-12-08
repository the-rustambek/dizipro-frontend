import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function Login(){
const {token,setToken} = useContext(AuthContext);

return <>

    <h1>login page</h1>
    <button onClick={()=>{
        setToken("123")
        }}>Kirish</button>
</>
}