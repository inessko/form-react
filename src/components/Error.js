import React from 'react'

function Error (props) {
  const { name, classStyle } = props;
  return <p className = {`Error ${classStyle? classStyle: null } `}>{name}</p>
}

export default Error;
