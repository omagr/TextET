import React from 'react'

export default function Alert(props) {

    // const captz = (word) => {
    //     const lower = word.toUppercase();
    //     return lower;
    // }

    return (

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"  style={{position:'fixed',width:'100vw'}}>
            <strong>{props.alert.type}</strong> : 
            {props.alert.message}
     
       
        </div>

    )
}
