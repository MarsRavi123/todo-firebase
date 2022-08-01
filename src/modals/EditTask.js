import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Form } from 'reactstrap';
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";


const EditTask = ({ todo, modal, toggle, updateTask }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setTaskName(todo.taskName);
        setDescription(todo.description);
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        await updateDoc(doc(db, 'taskList', todo.id), { taskName, description });
        updateTask();

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Task Name</Label>
                        <Input type='text' value={taskName} onChange={(e) => setTaskName(e.target.value)} name='taskName' />
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type='textarea' rows={5} value={description} onChange={(e) => setDescription(e.target.value)} name='description' />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default EditTask;