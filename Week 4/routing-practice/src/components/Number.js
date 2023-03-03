import React from 'react'
import { useParams } from 'react-router-dom'

const Number = (props) => {
    const {num} = useParams();
  return (
    <div>{num}</div>
  )
}

export default Number