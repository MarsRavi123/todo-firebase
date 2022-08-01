import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Form } from 'reactstrap';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const CreateTask = ({ modal, toggle, save}) => {

    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = async (e) => {
        e.preventDefault()
        await addDoc(collection(db, "taskList"), { taskName, description });
        setDescription('');
        setTaskName('')
        save();
    }
     

    return (

        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Task Name</Label>
                        <Input type='text' value={taskName} onChange={(e)=>setTaskName(e.target.value)} name='taskName' />
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type='textarea' rows={5} value={description} onChange={(e)=>setDescription(e.target.value)} name='description' />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>

    );
}

export default CreateTask;