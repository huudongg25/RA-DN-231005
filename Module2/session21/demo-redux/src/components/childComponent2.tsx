import React, { memo } from 'react'
import { useSelector } from 'react-redux';

const ChildComponent2 = () => {
    console.log('re-render');
    const update = useSelector((state:any)=>state.update)
  return (
    <div>ChildComponent2 {String(update)}</div>
  )
}

export default memo(ChildComponent2)