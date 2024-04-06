import { Link } from "react-router-dom";
import './menu.css';

export default function Menu(){
    return(
        <>
        <div className="menu" >
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cashier'>Cashier</Link></li>
            <li><Link to='/president'>President</Link></li>
            <li><Link to='users'>Users</Link></li>
            <li><Link to='login'>Login</Link></li>
            <li><Link to='register'>Register</Link></li>
            <li><Link to='contact'>Contact</Link></li>
            
            <li ><Link to='aboutus'>Aboutus</Link></li>
            
        </ul>
        </div>
        </>
    )
}