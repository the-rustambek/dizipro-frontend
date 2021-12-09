import Header from "../../components/Header/Header";
import "./Login.scss";
import BeeImage from "../../assets/Images/asal_ari.png"
export default function Login(){
    return <div className="login">
        <Header />
        <section className="login__main-section">
         
            <img src={BeeImage}className="login__be-image" alt="" />
         
         <div className="login__form-wrapper">
         <form className="login__form">
                <h2 className="login__title">Login</h2>
                
            </form>
         </div>
      
              
        </section>
    </div>

}