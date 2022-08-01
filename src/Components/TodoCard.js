import React, { useState } from 'react'
import { Card, CardTitle, CardText, CardBody, CardFooter, Col } from 'reactstrap';
import EditTask from '../modals/EditTask';


const TodoCard = ({ todo, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = () => {
        updateListArray();
        setModal(false)
              
    }

    const handleDelete = () => {
        deleteTask(todo.id);
    }

    return (

        <Col sm={3}>
            <Card>
                <CardBody>
                    <CardTitle><h5>{todo.taskName}</h5></CardTitle>
                    <CardText>{todo.description}</CardText>
                </CardBody>
                <CardFooter>
                    <i className="far fa-edit" onClick={() => setModal(true)}></i>
                    <i className="fas fa-trash-alt" onClick={handleDelete}></i>
                </CardFooter>
            </Card>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} todo={todo} />
        </Col>


    );
}

export default TodoCard;