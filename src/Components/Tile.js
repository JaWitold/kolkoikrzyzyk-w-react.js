import React from 'react'
import './Tile.css'

const urlO = "https://image.ceneostatic.pl/data/products/57506738/i-trixie-obwazanek-denta-fun-kurczak-225g.jpg"
const urlX = "https://argmeta.pl/10652-large_default/krzyzyk-srebrny-kd032.jpg"

function Tile(props)
{
    const img = <img src={props.target.status === "x" ? urlX : urlO}/>

    return (<div
                className="Tile"
                style={{clear: props.target.id % 3 === 0 ? "both" : "none"}}
                onClick={() => {props.target.handleOnClick(props.target.id)}}
            >
                {props.target.status !== '' && img }
            </div>
)}

export default Tile