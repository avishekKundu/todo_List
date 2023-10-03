import React, { useState } from "react";
import './to_do_list.css';

const TODOLIST = () => {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task.trim() === '')
            return;
        const updateTaskList = [...taskList, task]
        setTaskList(updateTaskList);
        setTask('');
    }

    const removeTask = (index) => {
        const updateTaskList = [...taskList];
        updateTaskList.splice(index, 1);
        setTaskList(updateTaskList);
    }

    return (
        <>
            <div className="container-fluid p-3 border border-dark border-2">
                <div className="container-fluid p-3 border border-dark border-2">
                    <center>TO-DO-LIST</center>
                </div>
                <div className="container-fluid p-3 border border-dark border-2">
                    <div className="task_input">
                        <textarea
                            placeholder="Enter task"
                            rows={3} cols={50}
                            value={task} onChange={(e) => setTask(e.target.value)} />
                    </div>
                    <div className="add_btn">
                        <button className="btn btn-primary" onClick={addTask}>ADD</button>
                    </div>
                </div>
                <div className="container-fluid taskListContainer">
                    <ul className="list-group task-list">
                        {taskList.map((task, index) => (
                            <li key={index} className="taskLists">
                                <div className="card p-2 listContainer">
                                    <div className="card-body cardBody">
                                        <p className="card-text inputTask"><span>TASK:</span> {task}</p>
                                        <button onClick={() => removeTask(index)} className="btn btn-danger border border-3 btnRemove">Delete</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TODOLIST;