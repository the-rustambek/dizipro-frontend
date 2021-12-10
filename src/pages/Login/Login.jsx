import Header from "../../components/Header/Header";
import "./Login.scss";
import BeeImage from "../../assets/Images/asal_ari.png";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function Login(){
return <div className="login">
    <Header />
    <section className="login__main-section">

        <img src={BeeImage}className="login__be-image" alt="" />

        <div className="login__form-wrapper">
            <form className="login__form">
                <h2 className="login__title">Login</h2>
                <div className="login__form__inputs">   
                    <Input type="email" placeholder="email" required error={true} />
                    <Input type="password" placeholder="password" required />


                </div>
                <Link className="login__form__forgot-password-link" to="/forgot-password">Forgot your password ? </Link>
                <Button>
                    Login</Button>
                    <div className="login__form__signup-text-wrapper">
                        <p>Don't have an account ?</p>
                        <Link className="login__form__forgot-password-link" to="/signup">Sign up</Link>
                
                    </div>
            </form>
        </div>
    </section>
</div>

}