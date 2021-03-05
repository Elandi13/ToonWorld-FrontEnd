import React from "react"
import { Card } from "semantic-ui-react";

function CartoonCard({cartoonInfo}) {
    const{tv_show, title, year, episode, description, clip, image, era} = cartoonInfo
    return(
        <Card>
            <div className="cartoon_card" height="200vh" width="100vw"> 
                    <iframe position="relative" width="100%" height="100%" src={clip}>
                    </iframe>
                    <p> 
                        {era}
                    </p>
                    <img src={image} alt="test"/>
            </div>
        </Card>
    )
}

export default CartoonCard;

///child of CartoonContainer
