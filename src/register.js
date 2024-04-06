import './register.css';
import { Link } from 'react-router-dom';
export default function Register() {
    return (
        <>
            <div className="reg" >

                <form id="reg-form" >
                    <div >
                        <img src="reg.jpg" alt="register" style={{ height: '495px', width: '300px', margin: '3px 0 0 2px', borderRadius: '10px' }} />
                    </div>
                    <div className="fields">
                        <h2 id='reg-head' align='center'>Registration</h2>
                        <div>
                            <label id="regnem">User Name</label>
                            <input type="text" id="regun" name="username" placeholder="Enter your E-Mail" />
                        </div><br />

                        <div >
                            <label id="rgemail">Email</label>
                            <input type="text" id="regemail" name="email" placeholder="Enter Email-id " />
                        </div><br />

                        <div >
                            <label id="phno">Phone Number</label>
                            <input type="number" id="phn" name="phone-number" placeholder="Enter Phone Number " />
                        </div><br />

                        <div >
                            <label id="passwo">Password</label>
                            <input type="password" id="regpass" name="password" placeholder="Enter Password " />
                        </div><br />

                        <div>
                            <label id='resid' >Resident</label>
                            <select id='resi' name='status' >
                                <option>Select</option>
                                <option>Owner</option>
                                <option>Tenent</option>
                            </select><br /><br />

                            <span><label id='reggen'>Gender</label></span>&emsp;
                            <div id='gender'>
                            <span style={{ fontWeight: 'bold' }}><input id='male' type='radio' name='test' />&nbsp;Male</span>&emsp;
                            <span style={{ fontWeight: 'bold' }}><input id='female' type='radio' name='test' />&nbsp;Female</span>
                            </div>
                        </div><br/>

                        <div>
                            <label id='regmem'>Members</label>
                            <input id="mem" type='text' name='number' size={1} maxLength={1}/>
                        </div><br/>
                        <div>
                            <button id='regbtn'>Register</button>
                        </div>
                        <div>
                        <span style={{fontWeight:'bold'}}>If already Registered click here!</span>&nbsp;<Link to="/login" style={{color:'gray',fontWeight:'bold'}}>Login</Link>
                            
                        </div>

                    </div>

                </form>

            </div>
        </>
    )
}