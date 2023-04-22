import React from "react";

const Helmet = (props) => {

    Document.title = 'Assurance -' + props.title
    return <div className="w-100">{props.children}</div>
    
};

export default Helmet;