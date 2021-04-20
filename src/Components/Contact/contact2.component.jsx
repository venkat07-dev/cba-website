import React from 'react';
import './contact2.css';

function Contact1()
{
    
    return(
        
<div class="src">
    <form>
    <div className="form">
      <input className="name" type="text"  name="name" placeholder="Name"/>
      <input className="mobilenumber" type="text"  name="mobile Number" placeholder="Mobile Number"/>
      <input className="email"  type="text" id="Email" name="lastname" placeholder="Email" />
      <input  className="message" name="subject" placeholder="Message" />
    <button className="submit" >Send Now</button>
    
    </div>
    </form>
</div>
    )
}
export default Contact1
