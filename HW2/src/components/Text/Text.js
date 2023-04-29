import './Text.css'
import React from "react";


const Text = (props) => {

    return (

        <div className={'Text'}>
          <p>{props.post}</p>
        </div>
    )
}

export default Text;
