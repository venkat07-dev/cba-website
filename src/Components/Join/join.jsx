import React from "react";
import "./join.css"
import vector from "../Join/images/vec4.png";
import vectortwo from "../Join/images/vec.svg";
import vectorthree from "../Join/images/vec2.svg";
import vectorfour from "../Join/images/vec3.svg";
import imgae from "../Join/images/join-img.png";
function Join(){
    return(
        <div>
               <div class="join">
                   <img class="join1" src={vector} alt=""/> 
                   <p class="join2">Become a member of this growing community</p>
                   <button class="button">Join the community</button><br/> 
                   <img class="join3" src={vectortwo} alt=""/>
                   <img class="join4" src={vectorthree} alt=""/>
                   <img class="join5" src={imgae} alt=""/>
                   <img class="join6" src={vectorfour} alt=""/>
                   <p class="vector">Your Photo here</p>
               </div>
        </div>

    );
}

export default Join;