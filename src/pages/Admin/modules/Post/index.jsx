import { Table } from "antd";
import { useEffect, useState } from "react";

export function Post() {
    const [post, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    
    const columns = [
        {
            title:  "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Título",
            dataIndex: "title",
            key: "title",
        }
    ];

    useEffect(() => {
        async function fetchPosts() {

        setLoading(true)
           const response = await fetch("https://jsonplaceholder.typicode.com/posts");
           const data = await response.json()
         
           setLoading(false)
           setPosts(data)
        }

        fetchPosts()
    }, [])

    return (
        <div>
            <h1>Lista de Posts</h1>


            <Table columns={columns} dataSource={post} loading={loading}/>
        </div>
    )
}