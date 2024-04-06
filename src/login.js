    import { Link } from "react-router-dom";
    import './login.css';

    export default function Login(){
        return(
            <>
            <div id="contain" align='center'>
                <div id="login-id">
                <form id="login-form">
                    <div>
                    <h2 id="tag">Login</h2>
                    </div><br/>
                    <div align='center'>
                    <label id="loginem">Email</label><br/>
                    <input type="text" id="logintext" name="logintext" placeholder="Enter your E-Mail id" />
                    </div><br/>

                    <div align='center'>
                    <label id="loginpas">Password</label><br/>
                    <input type="password" id="loginpass" name="loginpass" placeholder="Enter your Password "/>
                    </div><br/>

                    <div align='center'>
                    <button id="loginbtt">Submit</button><br/><br/>
                    <span>Not yet Register?</span>&nbsp;<Link to="/register" style={{color:'brown'}}>Register Here!</Link>
                    </div><br/>  

                    <div id='money'>
                    <video autoPlay muted loop id="video-background" >
                    <source src="skyscrapers_-_91744 (1080p).mp4" type="video/mp4" />
                    </video>
                    </div>
                </form>
                </div>

            </div>
            </>
        )
    }