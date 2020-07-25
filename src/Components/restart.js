import React from 'react'

function restart(props)
{
    return(<span style={{cursor: "pointer", color: "red"}} value="restart" type="button" onClick={() => {props.target.handleRestart()}}>reset</span>)
}

export default restart