import { Card, Input } from "antd"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Pagination } from 'antd'
import {Link} from 'react-router-dom'

const Artwork = () => {
    const [artworks, setArtworks] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')
    useEffect(() => {
        axios.get(`https://api.artic.edu/api/v1/artworks/search?page=${page}&q=${query}`).then(res =>{
            setArtworks(res.data.data)
            setTotal(res.data.pagination.total)
        }).catch(err => console.log(err))
    },[page,query])

    const items = artworks.map((item, i) => 
        <Link to={`/artwork/${item.id}`}>
            <Card key={i}>
                <h2>{item.title}</h2>
                <p>{item.on_loan_display}</p>
                <img  width={200} height={200} src={item.thumbnail?.lqip} alt="cehtn"/>
            </Card>
        </Link>)

    const handlePageCange = (page, pageSize) => {
        console.log(page)
        setPage(page)
    }

    const handleChange = e => {
        setQuery(e.target.value)
    }
    return(
        <div>
            <Pagination current={page} pageSize={12} total={total} onChange={handlePageCange}/>
            <Input onChange={handleChange}/>
            <div style={{margim:"20px auto", display:'flex', flexWrap:'wrap'}}>
                {items}
            </div>
        </div>
        
    )
}
export default Artwork