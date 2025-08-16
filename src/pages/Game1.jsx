import {useState, useEffect} from 'react'
import stage from '../assets/stage-1.8d1424476177f9643817.jpg'

export const Game1 = () => {
    const [view, setView] = useState(null);
    const [clickStatus, setClickStatus] = useState(false)
    const [positionX, setPositionX] = useState();
    const [positionY, setPositionY] = useState();
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
            const img = document.querySelector('#image');
            const rect = img.getBoundingClientRect();
            //console.log(rect)
            //console.log('Top:', rect.top);
            //console.log('Left', rect.right)
            setPositionX(rect.top + (0.072 * rect.height));
            setPositionY(rect.left + 0.795 * rect.width);
            setWidth(rect.width * 0.02);
            setHeight(rect.height * 0.05);

            const handleClick = (event) => {
                setView({ x: event.pageY, y: event.pageX });
                
                setClickStatus(prev => !prev)
                
            };

            document.addEventListener("click", handleClick);
            
            return () => {
            document.removeEventListener("click", handleClick); // cleanup
            };
        
        
    }, []);

    const handleEvent = () => {
        //console.log("Clicked");
        if (view.x > positionX && view.x < (positionX+height)) {
            if (view.y > positionY && view.y < (positionY+width)) {
                console.log("you win")
            } else {
                console.log("Incorrect")
            }
        } else {
            console.log("Incorrect")
        }
    }
    console.log(positionX,positionY);
    console.log(view)
    return (
        <>
            <h2>Find Waldo</h2>
            <div style={{minWidth: '100vw',maxWidth:'200px', margin: '0px 5px'}}>
                <img id='image' src={stage} width='100vw' style={{position:'absolute', minWidth:'100vw',maxWidth:'600px'}}/>
                {view && clickStatus? (
                    
                        <div
                        style={{
                            width: "20px",
                            height: "20px",
                            position: "absolute", // absolute positioning for pixel accuracy
                            top: view.x - 10,
                            left: view.y - 10,
                            border: "5px solid white"
                        }}
                        >
                        
                        </div>
                        
                    
    
                ): null}
                <div style={{
                    border: '3px solid black',
                    width: `${width}px`,
                    height: `${height}px`,
                    position: 'absolute',
                    top: `${positionX}px`,
                    left: `${positionY}px`
                }}></div>
            </div>
            
            {clickStatus && (
                <div 
                style={{
                    width: 'fit-content',
                    background: 'darkblue',
                    position: 'absolute',
                    top: view.x + 10,
                    left: view.y - 20,
                    fontSize: '1.5rem',
                    color: 'white',
                    cursor: 'pointer'
                }} 
                onClick={handleEvent}>
                    Waldo?
                </div>
            )

            }
            
        </>
    )
}
