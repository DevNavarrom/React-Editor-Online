
import React from 'react';

const format=(value)=>{

   return  value.split(' ').join(' ');
}

const Span = (props) => {
    return ( 
        <span style={props.style}><strong>aaa</strong></span>
     );
}
 
export default Span;