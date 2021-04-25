import React from 'react';
import './contact.css';
import background from  './bg.png';

//import map from '../assets/map1.png'
function Contact()
{
    
    return(

        <body >
        <div className="text" >
            
                    <img className="img2" src={background} alt=""></img>
                    
                    <div className="map">
                    <iframe className="map1"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1/117%20,AKS%20Thoppu%20Mandapam%20,camp,%20Tamil%20Nadu%20+(Your%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    <a href="https://www.mapsdirections.info/en/measure-map-radius/"></a></div>
                                    
                           
                            
                           
                <h1 className="txt" id="contact">Reach to us</h1>
                <p className="p">Let’s connect to extend our opportunities</p>
                </div>
        
        </body>


    
    );
}
export default Contact;