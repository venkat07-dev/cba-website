import React from 'react';
import './contact.css';
import background from  './bg.png';

//import map from '../assets/map1.png'
function Contact()
{
    
    return(

        <div className="text">
            <img className="img2" src={background} alt=""></img>
            
<div className="map">
<iframe className="map1" id="map" src="https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"  ></iframe>
<a href="https://www.embedgooglemap.net"></a>      
</div>
                
                   
                    
                   
        <h1 className="txt">Reach to us!</h1>
        <p className="p">Let’s connect to extend our opportunities</p>
        </div>



    
    );
}
export default Contact;