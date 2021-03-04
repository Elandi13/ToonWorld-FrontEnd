import React from "react"

function CartoonCard({cartoonInfo}) {
    const{tv_show, title, year, episode, description, clip} = cartoonInfo
    return(
        <li> 
            <div className ="thumbnail">
                <iframe width="420" height="315"
                    src={clip}>
                </iframe>
            </div>
        </li>
    )
}

export default CartoonCard;

///child of CartoonContainer
