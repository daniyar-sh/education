import { Button, Modal, Input } from 'antd'
import {useState} from 'react'

import Blog from '../../component/blog'

function Blogs() {
    const [blogs, setBlogs] = useState([
        {
        title: 'Blog 1',
        desc: 'Blog desc 1',
        check: false
        },
        {
        title: 'Blog 2',
        desc: 'Blog desc 2',
        check: false
        },
        {
        title: 'Blog 3',
        desc: 'Blog desc 3',
        check: false
        },
])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [blog , setBlog] = useState({title:'',desc:''})
    const handlChange = (e) => {
        setBlog({...blog, [e.target.name]: e.target.value})
    }

    const handleOk = () => {
        setBlogs([...blogs,blog])
        asd()
        handleCancel()
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const openModal = () => {
        setIsModalVisible(true)
    }

    const asd = () => {
        setBlog({})
    }

    const del = (i) => {
        setBlogs([...blogs].filter((item, index) => index != i ))
    } 

    const read = (index) => {
        const newBlogs = blogs
        newBlogs[index].check = !newBlogs[index].check
        setBlogs(newBlogs)
        console.log(newBlogs)
    }


    const blogItems = blogs.map((item, i) => <Blog read={read} del={del} index={i} blog={item} key={i}/>)
    return(
        <div>
            <Button onClick={openModal}>Add blog</Button>
        {blogItems}
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input value={blog.title} onChange={handlChange} name='title' placeholder='Title'/>
        <Input value={blog.desc} onChange={handlChange} name='desc' placeholder='Description'/>
        </Modal>
        </div>
    )
}

export default Blogs