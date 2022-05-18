import React, {useState} from 'react'
import "./Persion.css"
const Persion = (props) => {
    const [stateString, changeString] = useState({publisher:"Marvel Studio"})
    const showState = () => {
        console.log(stateString)
    }
    const switchVenderHandler = () => {
        changeString({publisher:"DC COMICS", studio:stateString.studio})
    }
  return (
    <div className='Persion'>
        <h1>{stateString.publisher}</h1>
        <button onClick={switchVenderHandler}>Change!!</button>
        <button onClick={showState}>show State</button>
        <p onClick={props.clickCallback}> <em style={{color: 'red'}}>I am {props.children}</em> Hi I am {props.name} i am {props.age} age i am the {Math.floor(Math.random()*10)}th generation</p>
    </div>
  )
}

export default Persion