import {useState, useEffect} from 'react'
import stage from '../assets/stage-1.8d1424476177f9643817.jpg'

export const Game1 = () => {
    const [view, setView] = useState(null);
    const [clickStatus, setClickStatus] = useState(false)

    useEffect(() => {
        
            const handleClick = (event) => {
                setView({ x: event.clientX, y: event.clientY });
                setClickStatus(prev => !prev)
                
            };

            document.addEventListener("click", handleClick);
            
            return () => {
            document.removeEventListener("click", handleClick); // cleanup
            };
        
        
    }, []);

    const handleEvent = () => {
        //console.log("Clicked");
        if (view.x > 638 && view.x < 650) {
            if (view.y > 68 && view.y < 88) {
                console.log("you win")
            } else {
                console.log("Incorrect")
            }
        } else {
            console.log("Incorrect")
        }
    }
    return (
        <>
            <h2>Find Waldo</h2>
            <div style={{border: '2px solid black',minWidth: '800px',maxWidth:'800px', margin: '0px auto'}}>
            <img src={stage} width='100%' style={{position:'absolute', minWidth:'800px',maxWidth:'800px'}}/>
            {view && clickStatus? (
                
                    <div
                    style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute", // absolute positioning for pixel accuracy
                        top: view.y - 10,
                        left: view.x - 10,
                        border: "1px solid black",
                        background: "yellow"
                    }}
                    >
                    yes
                    </div>
                    
                
  
            ): null}
            <div style={{
                border: '3px solid black',
                width: '12px',
                height: '20px',
                position: 'absolute',
                top: '68px',
                left: '638px'
            }}></div>
            </div>
            
            {clickStatus && (
                <div 
                style={{
                    width: 'fit-content',
                    background: 'darkgrey',
                    position: 'absolute',
                    bottom: '0px',
                    left: '50%'
                }} 
                onClick={handleEvent}>
                    Waldo?
                </div>
            )

            }
            
        </>
    )
}
