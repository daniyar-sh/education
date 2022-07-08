import {Button, Card} from "antd"
// import Edit from "../edit/edit"

function Blog({blog, index, handleDelete, openModal,}) {
    const {title ,desc, url, check} = blog
    return(
            <div>
            <Card
                title={title}
                extra={<div><Button onClick={() => handleDelete(index)} type='default'>Delete</Button>
                            <Button onClick={() => openModal(index)}>Edit</Button>
                
                </div>}
                style={{
                    width: 300,
                }}
                >
                <p>{desc}</p> 
                <img src={url} alt='цвет'/>
                {check ? <p>прочитано </p>: ""}
            </Card>
            </div>
    )
}

export default Blog