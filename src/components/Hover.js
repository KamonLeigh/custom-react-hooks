import React from 'react';
import { useHover, useWindowWidth, useMeasure } from '../hooks'
import { Card } from '../Elements'
import green from "../green.png";


const Hover = () => {

    const [ isHovered, bind ] = useHover()
    const width = useWindowWidth();
    // const [{ ref }, bounds] = useMeasure();

    // console.log(bounds)
    if(width < 600) return null;

    return (
        <div>
          <Card  {...bind} style={{ background: isHovered ? "var(--green)" : "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={green} alt="green" />
          </Card> 
        </div>
    )
}

export default Hover
