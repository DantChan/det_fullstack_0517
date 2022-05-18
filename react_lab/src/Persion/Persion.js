import React from 'react'

const Persion = (props) => {
  return (
    <div>
        <p> <em>I am {props.children}</em> Hi I am {props.name} i am {props.age} age i am the {Math.floor(Math.random()*10)}th generation</p>
    </div>
  )
}

export default Persion