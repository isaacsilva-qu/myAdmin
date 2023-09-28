import { Sidebar } from '../../components/Sidebar/index.jsx'
import { Breadcrumb, Menu } from "antd"
import { BiGridAlt, BiReceipt, BiGroup, BiCog, BiHome } from "react-icons/bi"
import { Navbar } from '../../components/Navbar/index.jsx'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AdminContent } from './styles.js'
import { useEffect } from 'react'

export function Admin() {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const path = pathname.split("/").filter(path => path)


    useEffect(() => {
        if(path.length === 1) {
            navigate("/admin/dashboard")
        }
    }, [])

    return (
        <div>
            <Navbar />
            <Menu
                onClick={(event) => navigate(event.key)}
                style={{width: 250, position: "fixed", top: 50 }}
                mode='inline'
                items={[
                    { label: "Dashboard", key: "dashboard", icon: <BiGridAlt size={22} /> },
                    { label: "Post", key: 'post', icon: < BiReceipt size={22} />},
                    { 
                        label: "Usuários", key: "usuarios", icon: <BiGroup size={22} />, children: [
                            {key: 'grupo-usuario', label: 'Grupos de Usuários'},
                            {key: 'Permissões', label: 'Permissões'}
                        ]

                    },
                    { label: "Congigurações", key: "configuracoes", icon: <BiCog size={22} /> }
                ]}



            />

            <AdminContent>
                <Breadcrumb
                    items={[
                        {title:<BiHome />},
                        {title: "admin" },
                        {title: path[1] },
                    ]}
                />
                <Outlet/>
            </AdminContent>

        </div>
    )
}