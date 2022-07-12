import { Button, Modal, Input } from 'antd'
import axios from 'axios'
import {useState, useEffect} from 'react'

import Blog from '../../component/blog'
import './ctyle.css'

function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [blog , setBlog] = useState({title:'',desc:''})
    const [editIndex, setEditIndex] = useState()
    
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/photos',{params:{_limit: 15}}).then(res => 
        setBlogs(res.data.map(item => {
            return{
                title: item.id,
                desc: item.title,
                url: item.thumbnailUrl
            }
        }))
        )
        // axios.get('https://jsonplaceholder.typicode.com/photos',{params:{_limit: 100}}).then(res =>
        // setImg(res.data.map(item => {
        //     return{
        //         asd: item.thumbnailUrl
        //     }
        // }))
        // )
        
    }, [])
    const handlChange = (e) => {
        setBlog({...blog, [e.target.name]: e.target.value})
    }

    const handleOk = () => {
        if(editIndex >= 0 ) {
            blogs.splice(editIndex, 1, blog)
        } else setBlogs([...blogs,blog])
        
        handleCancel()
    }

    const handleCancel = () => {
        setIsModalVisible(false)
        clear()
    }

    const openModal = (index) => {
        if(index >= 0){
            setBlog(blogs[index])
            setEditIndex(index)
        }
        setIsModalVisible(true)
    }

    const clear = () => {
        setBlog({})
    }

    const handleDelete = (i) => {
        setBlogs([...blogs].filter((item, index) => index !== i ))
    } 

    const read = (index) => {
        const newBlogs = blogs
        newBlogs[index].check = !newBlogs[index].check
        setBlogs(newBlogs)
        console.log(newBlogs)
    }


    const blogItems = blogs.map((item, i) => <Blog  read={read} openModal={openModal} handleDelete={handleDelete} index={i} blog={item} key={i}/>)
    return(
        <div>
            <Button onClick={openModal}>Add blog</Button>
            <div className='container'>
            {blogItems}
            </div>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input value={blog.title} onChange={handlChange} name='title' placeholder='Title'/>
        <Input value={blog.desc} onChange={handlChange} name='desc' placeholder='Description'/>
        </Modal>
        </div>
    )
}

export default Blogs