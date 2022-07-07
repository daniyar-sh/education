import React from "react"; 
import { Modal, Button,Input } from "antd";
import { useState } from "react";

const Edit = ({blog, index}) => {
    const {title ,desc, check} = blog
    const [editTitle, setEditTitle] = useState()
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleEditTitle = (e) => {
        console.log({[e.target.name]: e.target.value})
        setEditTitle(blog.title =  e.target.value)
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
     };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Редактировать
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input  onChange={handleEditTitle}  name='title' placeholder='Title'/>
        <Input  name='desc' placeholder='Description'/>
      </Modal>
    </>
  );
}

export default Edit