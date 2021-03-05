import React from "react"
import { Card } from "semantic-ui-react";

function CartoonCard({cartoonInfo}) {
    const{tv_show, title, year, episode, description, clip, image, era} = cartoonInfo
    return(
        <Card>
            <div className="cartoon_card" height="100vh" width="100vh"> 
                    <img src={image} alt ="cartoon-image" height = "100%" width = "100%" />
            </div>
        </Card>
    )
}

export default CartoonCard;

///child of CartoonContainer


///use this for cartoon show page
/* <iframe position="absolute" width="100%" height="100%" src={clip}>
</iframe> */