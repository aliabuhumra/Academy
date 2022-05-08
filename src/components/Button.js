import { Link } from "react-router-dom";
export default function Button({text , click}){
    return (
        <button 
        className={click ? "bg-orange font-bold py-2 px-10 rounded-md btn sm:hidden md:hidden lg:block" 
        : "bg-orange font-bold py-2 px-10 rounded-md md:btn lg:block" }>
            <Link to='/join-us'>{text}</Link>
        </button>
    );
}

