import "./Button.scss";

export default function Button(props){
        return ( <button className={`button ${props.className}`}  {...props}>{props.children}</button>
        )}