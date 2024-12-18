
export default function Footer() {
    return (

        
<>

<section>
        <div className="footer default-style">
            <div className="container">
                <div className="row">
                    <div className='col-xl-6 col-lg-6 col-md-6 col-xs-12'>
                        <div className="footerleft">
                            <div className ="handler-footer-left">
                            <div className="handler-secton">
                                <div className="section-conten" >
                                    
                                    <h3 className="section-title">
                                    Let's Work <span>Together!</span>
                                    </h3>
                                </div>
                                <p>We're excited to work with you soon! Please share your details & we'll get back in 2-3 working days.</p>

                            </div>
                            <div className="contactmail">
                            <h3>Contact :</h3>
                            <a href="mailto:contact@webkarthikeya.com">contact@webkarthikeya.com</a>
                            </div>

                            <div className="experiance-details">
                                
                            <h3>Follow us :</h3>
                                <div className="experiance_title">
                                    <ul>
                                        <li ><a href="mailto:contact@webkarthikeya.com" title="Mail"><i className="fa-solid fa-envelope"></i></a></li>
                                        <li ><a href="https://www.instagram.com/karthikeyavaranasi07?igsh=emk0bzh0ZnNmNWdq" title="instageam" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li ><a href="https://www.linkedin.com/in/karthikeya-varanasi-2187a2210/" title="Linked in" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                                        <li ><a href="https://wa.link/w5d4mp" title="whats app"> <i className="fa-brands fa-whatsapp"></i></a></li>
                                    </ul>
                                
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-xs-12'>
                    <form action="includes/action.php" method="post" className="form">
                            <label>
                                <input type="text"  name="name" id="name" className="input" placeholder="" required="" />
                                <span>Firstname</span>
                            </label>

                        
                        <label>
                            <input type="email" name="email" id="email" className="input"  placeholder="" required="" />
                            <span>Email</span>
                        </label> 
                        
                        
                        <label>
                        <input type="text" name="mobile" id="mobile" className="input" placeholder="" required="" />
                            <span>Phone Number</span>
                        </label>
                        
                            <label>
                                 <select className="input"  data-trigger name="service" id="service"  placeholder="" required="">
                                    <option defaultValue value="Website Customize">Website Customize</option>
                                    <option value="Single Landing Page Design">Single Landing Page Design</option>
                                    <option value="Design">Design</option>
                                    <option value="Development">Development</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Graphic Design">Graphic Design</option>
                                 </select>
                                 <span>Service</span>
                            </label>
                        <label>
                            <textarea  name="message" id="message" cols="30"  rows="10" className="input"  style={{ width: '100%', height: '100px', padding: '10px' }} placeholder="Enter your Text"></textarea>
                            
                        </label>
                        <button type="submit" value="Enquire Now" title="Submit"  name="submit" className="submit">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
          
        </div>
    </section>
   

   <div className="icon-bar">
   <a href="mailto:contact@webkarthikeya.com"  className="facebook" title="Mail"><i className="fa-solid fa-envelope"></i></a>
   
   <a href="https://www.instagram.com/karthikeyavaranasi07?igsh=emk0bzh0ZnNmNWdq" className="twitter" title="instageam" target="_blank"><i className="fa-brands fa-instagram"></i></a>
   
   <a href="https://www.linkedin.com/in/karthikeya-varanasi-2187a2210/" className="google" title="Linked in" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
 
   <a href="https://wa.link/w5d4mp" title="whats app" className="linkedin"> <i className="fa-brands fa-whatsapp"></i></a>
 </div>
     <a href="https://wa.link/w5d4mp" title="whats app" className="float" target="_blank">
     <i className="fa-brands fa-whatsapp"></i>
     </a>
     <div className="copy-writer">
             <span>© Copyright 2025 by <a href="#" title="Karthikeya Varanasi">Karthikeya Varanasi</a> </span>
     </div>
</>

    );


}