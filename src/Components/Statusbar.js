import React from 'react'

function Statusbar(props)
{
	const finnished = <h1 style={{color: "green"}}>{"winner: "+props.target.turn}</h1>
    const notfinnished = <h1>{"turn of: "+ props.target.turn}</h1>
    const draw = <h1 style={{color: "blue"}}>draw</h1>
    return (<nav>
                {props.target.turn === "draw" ? draw : (!props.target.isFinished ? notfinnished : finnished)}
            </nav>)
}

export default Statusbar