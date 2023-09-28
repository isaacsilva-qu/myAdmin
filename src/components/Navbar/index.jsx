import { Button } from "antd"
import { Container } from "./styles"
import { BiBell, BiExit } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

export function Navbar() {
    const navigate = useNavigate()

    return (
        <Container>
            <div>
                <h1>Logo name</h1>
            </div>
            <ul>
                <li>
                    <Button type="text" shape="circle" icon={ <BiBell size={22} /> } />
                </li>
                <li>
                    <Button onClick={() => navigate("/login")} type="text" shape="circle" icon={ <BiExit size={22} /> } />
                </li>
            </ul>
        </Container>
    )
}