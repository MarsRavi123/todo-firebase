import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask';
import TodoCard from './TodoCard';
import { collection, query, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
const Todo = () => {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "taskList"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let todosArray = [];
            querySnapshot.forEach((doc) => {
                todosArray.push({ ...doc.data(), id: doc.id });
            });
            setTaskList(todosArray);
            //console.log(todosArray)
        });
        return () => unsub();

    }, []);

    const saveTask = () => {
        setModal(false)
        console.log('Todo Added.')
    }

    const deleteTask = async (id) => {
        await deleteDoc(doc(db, "taskList", id));
        console.log('Todo Deleted.')
    };


    const updateListArray = () => {
        console.log('Todo Updated.')
    }

    const toggle = () => {
        setModal(!modal)
    }

    return (
        <>

            <div className='header text-center'>
                <h3 className='display-6'>To-do</h3>
                <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Create Task</button>
            </div>

            <div className='container my-3'>
                <div className='row gy-2'>
                    {taskList && taskList.map((todo, index) => <TodoCard todo={todo} key={todo.id} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
                </div>
            </div>

            <CreateTask modal={modal} toggle={toggle} save={saveTask} />

        </>
    );
}

export default Todo;