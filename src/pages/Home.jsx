import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/game1')
    }
    return (
        <>
            <h2>Where's Waldo</h2>
            <button
            onClick={handleClick}
            style={{cursor: 'pointer'}}
            >Start Game</button>
        </>
    )
}
