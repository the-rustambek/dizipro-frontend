import "./Header.scss";
import Logo from "../../assets/Images/dizipro.png";

export default function Header(){
return ( 
    <header className="header">
        <div className="container">
            <img src={Logo} alt="" />
        </div>
    </header>   
    );
}