import { useNavigate } from "react-router-dom"

export function Home() {
    const navigate = useNavigate()

    return (
    <div>
        <h1>Home page...</h1>
        <button onClick={() => navigate("/admin")} >Ir para admin</button>
    </div>
    )
}