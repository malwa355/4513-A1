/**This Component is a wrapper for the filter and the favorites.
 *
 * There is no complex functionality with this component, so it has no props:
 */
import React from "react";

const panel = (props) => {

    return (
        <div className={`fixed mt-20 top-0  ${props.id === 'filter' ? 'left-0' : 'right-0'}`}>
            {props.children}
        </div>
    )
    
}

export default panel;