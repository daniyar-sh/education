import {Button, Card} from "antd"
import Edit from "../edit/edit"

function Blog({blog, index, del, read}) {
    const {title ,desc, check} = blog
    return(
        <div style={{
            display:'flex'
            
        }}>
            <div>
            <Card
                title={title}
                extra={<a href="#">More</a>}
                style={{
                    width: 300,
                    
                }}
                >
                <p>{desc}</p> 
                
                {check ? <p>прочитано </p>: ""}
                <Button onClick={() => del(index)}>del</Button>
                <Button onClick={() => read(index)}>Прочитано</Button>
                <Edit blog={blog} index={index}/>
            </Card>
            </div>
           
            
        </div>
    )
}

export default Blog