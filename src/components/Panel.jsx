import React from "react";



const panel = (props) => {

    return (
        <div className={`fixed mt-20 top-0  ${props.id === 'filter' ? 'left-0' : 'right-0'}`}>
            {props.children}
        </div>
    )

}

export default panel;