import React from 'react'



function Button (props) {

  const { name, className, click, submit } = props;
  function onHandleClick (e, click) {
    return click (e)
  }
  return
}

export default Button;
