import React from "react";



const panel = (props) => {

    return (
        <div className="fixed mt-11">
            {props.children}
        </div>
    )

}

export default panel;