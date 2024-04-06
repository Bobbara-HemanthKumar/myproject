import './contact.css';
export default function Contact(){
    return(
        <>
       
        <section>
            &nbsp;
            <a href='https://www.facebook.com/hippocloud/' target='blank' style={{fontSize:'22px'}}><i class="bi bi-facebook"></i></a>&emsp;
            <a href='https://www.instagram.com/hippocloud.vizag/' target='blank' style={{fontSize:'22px',color:'rgb(228, 64, 95) '}}><i class="bi bi-instagram"></i></a>&emsp;
            <a href='https://www.twitter.com/hippocloud1/' target='blank' style={{fontSize:'22px'}}><i class="bi bi-twitter"></i></a>&nbsp;
          
            <form action="#" className="form" >
            <div className="contact-details" >
                <div className="contact-left">

                    <p><i class="bi bi-envelope-fill"></i>
                        <a href="contact.js">Contact@gmail.com</a></p>

                    <p><i class="bi bi-telephone-fill"></i>
                        <span>Ph:888888888</span></p>

                    <p><i class="bi bi-geo-alt-fill"></i>
                        <span>Address:VISAKHAPATNAM</span></p>
                </div>
                <div className="details">
                    <label for="name" >Name:</label>
                    <div className="field">
                        <input type="text" name="name" required  />
                    </div>

                    <label for="email">Email:</label>
                    <div className="field">
                        <input type="email" name="email" required  />
                    </div><br/>

                    <label for="comment">Comment:</label>
                        <div className="field">
                            <textarea rows="5" colspan="20" name="comment"  required></textarea>
                        </div><br/>

                    <div >
                        <button className="btnn" >submit</button>
                    </div>
                </div>
                <div>
                    <img id="cont" src="contact.jpg" alt="contact" height={'400px'} />
                </div>
            </div>
            
            </form>

            </section>
            

        </>
    )
}